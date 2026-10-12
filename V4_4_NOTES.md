# V4.4 update notes

- Casino Simulator: corrected team size to five; added shared betting instance explanation; embedded user-confirmed MP4 trailer; added interactive three-card shuffle using the original 52 face images and `CardBack.png`.
- Horror Game: reworked as a development journal for Spark 1 (forest stalking AI) and Spark 2 (combat movement). Media deferred to V4.5.
- Removed Custom Game Controller from the portfolio (resume remains unchanged).
- Added a Data Structures & Algorithms coursework collection (BST/AVL, Kruskal, Water Retention, Reference-Counted Deque) and a separate Memory Manager coursework case study. Diagrams are illustrative, not output from the assignments.
- Added portfolio category filters.
- Preserved Bubbly Wubbly case study and DigiPen Game Gallery link. Casino Simulator gallery URL still awaits publication.

## Testing and deployment

Run `npm install` then `npm run build`. Cloudflare Pages output: `dist`. The dependency installation could not complete in this isolated environment, so the production build and browser rendering have **not** been verified here. Please test the deployment and revert if necessary.

## Editing

Project content: `src/data/projects.js`.
Project visuals and components: `src/main.jsx`, `src/v4-theme.css`.
