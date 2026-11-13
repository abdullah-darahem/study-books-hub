# 📚 Study Books Hub

One landing page for all the interactive study books (Arabic Egyptian colloquial + English).

| Book | Path |
|---|---|
| Artificial Intelligence | `/books/ai.html` |
| Microprocessors & Assembly | `/books/assembly.html` |
| Data Analytics | `/books/data-analytics.html` |
| Databases I | `/books/databases.html` |
| Image Processing | `/books/image-processing.html` |
| Operating Systems | `/books/operating-systems.html` |
| Operations Research | `/books/operations-research.html` (needs internet for KaTeX) |
| Robotics | `/books/robotics.html` |
| Software Engineering 1 | `/books/software-engineering.html` |
| Web Programming | `/books/web-programming.html` |

Each book is a single self-contained HTML file in `public/books/`. The landing page is React + Vite + Tailwind.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
Import the repo — Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). No config needed.

## Add a new book
1. Drop the HTML file in `public/books/`.
2. Add an entry in `src/books.ts`.
