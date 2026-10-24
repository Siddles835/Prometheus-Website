# Prometheus Website

Website for Prometheus — curriculum partnerships and education outreach for organizations.

## Stack

- **React** + **Vite** frontend with **React Router** multi-page navigation
- **Node.js** + **Express** server for production and API routes

## Pages

- `/` Home
- `/about` About Prometheus
- `/curriculum` Curriculum partnerships
- `/outreach` Curriculum development & organization outreach
- `/hackathons` Past hackathons

Legacy paths (`/internships`, `/python`, `/gallery`, `/testimonials`, `/why`, `/levels`) redirect to current pages.

## Scripts

```bash
npm install
npm run dev          # Vite frontend at http://localhost:5173
npm run build        # Build static assets to dist/
npm start            # Serve built site with Express (PORT=3001)
```

During local frontend development, `/api/*` requests are proxied to the Express server on port `3001`.

## API

- `GET /api/health` — health check
- `GET /api/site` — basic site metadata
