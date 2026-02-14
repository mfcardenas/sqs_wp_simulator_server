# ISO Simulator Persistence Server

## Overview
**ISO Simulator Persistence Server** is an educational simulation game designed to teach software engineering students the impact of technical decisions on **ISO 25010** quality metrics.

Previously a standalone client-side game, this version introduces a **Node.js/Express backend** and **PostgreSQL database** to persist player progress, capture detailed game metadata, and enable learning analytics.

## Features
- **Real-world Scenarios:** Players choose between projects like E-commerce, Hospital System, Fintech, and Social Network.
- **ISO 25010 Metrics:** Decisions impact 8 quality characteristics: Functional Suitability, Performance, Compatibility, Usability, Reliability, Security, Maintainability, and Portability.
- **Resource Management:** Balance Budget and Time while meeting quality objectives.
- **Persistence:**
  - Player Registration (Nickname + University).
  - Game Attempts (Started/Completed status).
  - Detailed Metadata (Decisions, Final Metrics, Resource Efficiency).
- **Dual Language:** Full support for English and Spanish.

## Tech Stack
- **Frontend:** Vanilla JS, HTML5, CSS3.
- **Backend:** Node.js, Express.js.
- **Database:** PostgreSQL (using `pg` driver).
- **Architecture:** Client-Server with REST API headers for persistence.

## Setup & Running

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Database Configuration:**
    Ensure your PostgreSQL database is running and configured in `.env.local`:
    ```env
    DATABASE_URL=postgres://user:password@localhost:5432/your_db
    PORT=3003
    ```

3.  **Run Server:**
    ```bash
    npm start
    ```
    The server will start on port **3003** (default).

## Data Model

The system uses the following key tables:

### `users` & `game_profiles`
Stores player identity.
- `nickname`: Player's display name.
- `university`: Player's institution.

### `game_attempts`
Stores each game session.
- `game_key`: `'ISO_SIMULATOR'`
- `status`: `'STARTED'` -> `'COMPLETED'`
- `score`: Calculated based on object completion and resource efficiency.
- `metadata`: JSONB field containing rich game data.

#### Metadata Structure
```json
{
  "project": "E-commerce Platform",
  "level": "EXPERT", // EXPERT, ADVANCED, NOVICE
  "metrics": {
    "security": 95,
    "usability": 80,
    ...
  },
  "resources": {
    "time": 2,
    "budget": 15000
  },
  "decisions": [
    { "cat": "architecture", "opt": "microservices" },
    { "cat": "database", "opt": "sql_traditional" }
  ]
}
```

## Analytics Queries

### 1. Leaderboard (Top Scores)
```sql
SELECT nickname_snapshot, university_snapshot, score, metadata->>'level' as level
FROM game_attempts
WHERE game_key = 'ISO_SIMULATOR' AND status = 'COMPLETED'
ORDER BY score DESC
LIMIT 10;
```

### 2. Average Metrics by Project Type
```sql
SELECT 
  metadata->>'project' as project,
  AVG((metadata->'metrics'->>'security')::int) as avg_security,
  AVG((metadata->'metrics'->>'reliability')::int) as avg_reliability
FROM game_attempts
WHERE game_key = 'ISO_SIMULATOR' AND status = 'COMPLETED'
GROUP BY 1;
```

### 3. Most Popular Architecture Decisions
```sql
SELECT 
  decision->>'opt' as architecture_choice,
  COUNT(*) as frequency
FROM game_attempts,
LATERAL jsonb_array_elements(metadata->'decisions') as decision
WHERE game_key = 'ISO_SIMULATOR' 
  AND decision->>'cat' = 'architecture'
GROUP BY 1
ORDER BY 2 DESC;
```