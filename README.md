# Christopher Kenreigh — Portfolio

Vite + React + TanStack Router portfolio.

## Edit content (one place per concern)

| What | File |
|------|------|
| Name, title, metrics, philosophy, timeline, contact | `src/data/profile.ts` |
| Case studies & methodology cards | `src/data/work.ts` |
| Interests / essays | `src/data/interests.ts` |
| Images | `public/covers/`, `public/work/` |

Routes under `src/routes/` are layout only — they import from `src/data/`. Do not put copy in route files.

## Run

```bash
npm install
npm run dev
```

## Structure

```
src/
  data/          ← all editable content
  components/    ← UI (nav, cards, embed sheet)
  routes/        ← pages (markup + data imports)
  lib/           ← helpers (cn, embed URL)
public/          ← static images
```
