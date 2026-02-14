/**
 * persistence.js
 * ──────────────
 * Client-side registration modal and REST API calls for game persistence.
 * Loaded as a classic script BEFORE the ES module main.js.
 * Exposes window.persistenceAPI for main.js to call.
 */
(function () {
    const STORAGE_KEY = "iso9241QuestPlayer";
    const API_BASE = window.location.origin;

    /* ── State ──────────────────────────────────────────── */

    let playerData = loadFromStorage();

    function loadFromStorage() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (_) { return null; }
    }

    function saveToStorage(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (_) { /* ignore */ }
    }

    /* ── Registration Modal ────────────────────────────── */

    function showRegistrationModal() {
        if (playerData?.userId) {
            showBadge();
            return;
        }

        const overlay = document.createElement("div");
        overlay.id = "persist-overlay";
        overlay.style.cssText = `
            position:fixed;top:0;left:0;width:100%;height:100%;
            background:rgba(0,0,0,.55);display:flex;align-items:center;
            justify-content:center;z-index:9999;backdrop-filter:blur(4px);
        `;

        overlay.innerHTML = `
            <div style="background:var(--bg-card,#1e1e2e);border-radius:16px;padding:2rem;
                max-width:380px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,.4);
                font-family:'Outfit',sans-serif;color:var(--text,#e0e0e0);">
                <h2 style="margin:0 0 .5rem;font-size:1.3rem;">Player Registration</h2>
                <p style="margin:0 0 1rem;font-size:.85rem;opacity:.7;">
                    Register to track your progress across sessions.
                </p>
                <label style="display:block;margin-bottom:.75rem">
                    <span style="font-size:.8rem;font-weight:600">Nickname</span>
                    <input id="persist-nick" type="text" placeholder="Your name" required
                        style="display:block;width:100%;margin-top:4px;padding:.55rem .75rem;
                        border-radius:8px;border:1px solid #444;background:#2a2a3e;color:#fff;
                        font-size:.9rem;box-sizing:border-box;" />
                </label>
                <label style="display:block;margin-bottom:1rem">
                    <span style="font-size:.8rem;font-weight:600">University</span>
                    <input id="persist-uni" type="text" placeholder="UFV Madrid" required
                        style="display:block;width:100%;margin-top:4px;padding:.55rem .75rem;
                        border-radius:8px;border:1px solid #444;background:#2a2a3e;color:#fff;
                        font-size:.9rem;box-sizing:border-box;" />
                </label>
                <button id="persist-submit"
                    style="width:100%;padding:.65rem;border:none;border-radius:8px;
                    background:linear-gradient(135deg,#6c63ff,#3f3d9e);color:#fff;
                    font-weight:700;font-size:.95rem;cursor:pointer;">
                    Register
                </button>
                <p id="persist-error" style="color:#ff6b6b;font-size:.8rem;margin:.5rem 0 0;display:none;"></p>
            </div>
        `;

        document.body.appendChild(overlay);

        document.getElementById("persist-submit").addEventListener("click", async () => {
            const nickname = document.getElementById("persist-nick").value.trim();
            const university = document.getElementById("persist-uni").value.trim();
            const errorEl = document.getElementById("persist-error");

            if (!nickname || !university) {
                errorEl.textContent = "Both fields are required.";
                errorEl.style.display = "block";
                return;
            }

            try {
                const res = await fetch(`${API_BASE}/api/players`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nickname, university })
                });
                const data = await res.json();
                if (!data.ok) throw new Error(data.error || "Registration failed");

                playerData = { userId: data.userId, nickname, university };
                saveToStorage(playerData);
                overlay.remove();
                showBadge();
            } catch (err) {
                errorEl.textContent = err.message;
                errorEl.style.display = "block";
            }
        });
    }

    /* ── Badge + Logout ────────────────────────────────── */

    function showBadge() {
        if (!playerData) return;
        const existing = document.getElementById("persist-badge");
        if (existing) existing.remove();

        const badge = document.createElement("div");
        badge.id = "persist-badge";
        badge.style.cssText = `
            position:fixed;bottom:16px;right:16px;z-index:9998;
            background:linear-gradient(135deg,#6c63ff,#3f3d9e);
            color:#fff;padding:.45rem .85rem;border-radius:24px;
            font-family:'Outfit',sans-serif;font-size:.8rem;font-weight:600;
            display:flex;align-items:center;gap:.5rem;
            box-shadow:0 4px 12px rgba(0,0,0,.3);cursor:default;
        `;
        badge.innerHTML = `
            <span>👤 ${playerData.nickname}</span>
            <button id="persist-logout" title="Logout"
                style="background:none;border:none;color:#ff8a8a;cursor:pointer;font-size:1rem;
                padding:0;line-height:1;">✕</button>
        `;
        document.body.appendChild(badge);
        document.getElementById("persist-logout").addEventListener("click", () => {
            localStorage.removeItem(STORAGE_KEY);
            playerData = null;
            badge.remove();
            showRegistrationModal();
        });
    }

    /* ── Public API ────────────────────────────────────── */

    window.persistenceAPI = {
        /** Get current player data */
        getPlayer() {
            return playerData ? { ...playerData } : null;
        },

        /** Create a new game attempt when scenario loads */
        async createAttempt(scenarioId, scenarioTitle) {
            if (!playerData?.userId) return null;
            try {
                const res = await fetch(`${API_BASE}/api/attempts`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        userId: playerData.userId,
                        scenarioId,
                        scenarioTitle,
                        nickname: playerData.nickname,
                        university: playerData.university
                    })
                });
                const data = await res.json();
                if (data.ok) {
                    console.log(`[persistence] Attempt created: ${data.attemptId}`);
                    return data.attemptId;
                }
            } catch (err) {
                console.warn("[persistence] Could not create attempt:", err.message);
            }
            return null;
        },

        /** Complete an attempt with full results */
        async completeAttempt(attemptId, { score, correctCount, incorrectCount, maxScore, durationMs, metadata }) {
            if (!attemptId) return;
            try {
                await fetch(`${API_BASE}/api/attempts/${attemptId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        score, correctCount, incorrectCount, maxScore, durationMs, metadata
                    })
                });
                console.log(`[persistence] Attempt ${attemptId} completed`);
            } catch (err) {
                console.warn("[persistence] Could not complete attempt:", err.message);
            }
        }
    };

    /* ── Init ──────────────────────────────────────────── */

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", showRegistrationModal);
    } else {
        showRegistrationModal();
    }
})();
