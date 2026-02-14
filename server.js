require("dotenv").config({ path: ".env.local" });
const path = require("path");
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const pool = require("./db");

const PORT = process.env.PORT || 3002;
const GAME_KEY = "ISO_SIMULATOR";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ── Helpers ─────────────────────────────────────────────

const uuid = () => crypto.randomUUID();

/**
 * Lookup or create user + game_profile.
 */
const ensurePlayer = async (nickname, university) => {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");
        const now = new Date().toISOString();

        const existing = await client.query(
            `SELECT gp.id AS profile_id, gp.user_id
             FROM game_profiles gp
             WHERE LOWER(gp.nickname) = LOWER($1)
             LIMIT 1`,
            [nickname]
        );

        if (existing.rows.length > 0) {
            await client.query("COMMIT");
            return {
                userId: existing.rows[0].user_id,
                profileId: existing.rows[0].profile_id
            };
        }

        const userId = uuid();
        await client.query(
            `INSERT INTO users (id, created_at, updated_at) VALUES ($1, $2, $2)`,
            [userId, now]
        );

        const profileId = uuid();
        await client.query(
            `INSERT INTO game_profiles (id, user_id, nickname, university, created_at, updated_at)
             VALUES ($1, $2, $3, $4, $5, $5)`,
            [profileId, userId, nickname, university, now]
        );

        await client.query("COMMIT");
        return { userId, profileId };
    } catch (err) {
        await client.query("ROLLBACK");
        throw err;
    } finally {
        client.release();
    }
};

// ── REST API ────────────────────────────────────────────

// POST /api/players — Register or lookup player
app.post("/api/players", async (req, res) => {
    try {
        const { nickname, university } = req.body;
        if (!nickname || !university) {
            return res.status(400).json({ error: "nickname and university are required" });
        }
        const result = await ensurePlayer(nickname.trim(), university.trim());
        res.json({ ok: true, userId: result.userId, profileId: result.profileId });
    } catch (err) {
        console.error("[api/players]", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// POST /api/attempts — Create a new game attempt (STARTED)
app.post("/api/attempts", async (req, res) => {
    try {
        const { userId, scenarioId, scenarioTitle, nickname, university } = req.body;
        if (!userId) {
            return res.status(400).json({ error: "userId is required" });
        }

        const attemptId = uuid();
        const now = new Date().toISOString();
        const metadata = {
            scenario_id: scenarioId || "",
            scenario_title: scenarioTitle || ""
        };

        await pool.query(
            `INSERT INTO game_attempts
             (id, user_id, game_key, status, started_at, score, max_score,
              correct_count, incorrect_count, nickname_snapshot, university_snapshot,
              metadata, created_at, updated_at)
             VALUES ($1, $2, $3, 'STARTED', $4, 0, 0, 0, 0, $5, $6, $7, $4, $4)`,
            [attemptId, userId, GAME_KEY, now, nickname || "", university || "", JSON.stringify(metadata)]
        );

        console.log(`[api] Created attempt ${attemptId} for userId=${userId}`);
        res.json({ ok: true, attemptId });
    } catch (err) {
        console.error("[api/attempts]", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// PUT /api/attempts/:id — Complete an attempt with results
app.put("/api/attempts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { score, correctCount, incorrectCount, maxScore, durationMs, metadata } = req.body;
        const now = new Date().toISOString();

        await pool.query(
            `UPDATE game_attempts
             SET status = 'COMPLETED',
                 completed_at = $2,
                 duration_ms = $3,
                 score = $4,
                 max_score = $5,
                 correct_count = $6,
                 incorrect_count = $7,
                 metadata = $8,
                 updated_at = $2
             WHERE id = $1`,
            [id, now, durationMs || 0, score || 0, maxScore || 0,
                correctCount || 0, incorrectCount || 0, JSON.stringify(metadata || {})]
        );

        console.log(`[api] Completed attempt ${id} (score: ${score})`);
        res.json({ ok: true });
    } catch (err) {
        console.error("[api/attempts/:id]", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET /api/leaderboard — Top scores
app.get("/api/leaderboard", async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT
                ga.nickname_snapshot AS nickname,
                ga.university_snapshot AS university,
                ga.score,
                ga.correct_count,
                ga.incorrect_count,
                ga.metadata->>'scenario_title' AS scenario,
                ga.started_at
             FROM game_attempts ga
             WHERE ga.game_key = $1 AND ga.status = 'COMPLETED'
             ORDER BY ga.score DESC
             LIMIT 20`,
            [GAME_KEY]
        );
        res.json({ ok: true, leaderboard: result.rows });
    } catch (err) {
        console.error("[api/leaderboard]", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ── Start ───────────────────────────────────────────────

app.listen(PORT, () => {
    console.log(`ISO 9241 Quest server listening on http://localhost:${PORT}`);
});
