# Prometheus Website

Professional nonprofit website for Prometheus — free Python classes for students.

## Stack

- **React** + **Vite** frontend with **React Router** multi-page navigation
- **Node.js** + **Express** server for production and API routes

## Pages

- `/` Home
- `/why` Why Prometheus
- `/gallery` Gallery
- `/levels` Levels
- `/internships` Internships
- `/testimonials` Testimonials

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
