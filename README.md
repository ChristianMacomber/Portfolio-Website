# Christian Macomber — Portfolio V3

React 19 + Vite portfolio. Includes the Home, Portfolio, Resume, Contact, and individual project pages. All screenshots are from the supplied game assets.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install` in this folder.
3. Run `npm run dev` and open the local URL Vite prints.
4. Run `npm run build` for a production-ready `dist/` directory.

## GitHub / deployment

Upload the **contents of this folder** to your GitHub repository (do not upload `node_modules`). For GitHub Pages, configure Vite's `base` to your repository subpath if not using a custom domain; the hash-based internal routing works on static hosts. Netlify and Vercel work without route rewrites.

## Change content

- `src/data/projects.js`: project titles, copy, `rank`, `featured`, images, contributions, links. The two lowest-ranked `featured:true` projects appear on Home; all projects are sorted by `rank` on Portfolio.
- `src/data/site.js`: LinkedIn, GitHub (currently empty), contact email, résumé, Home bubble images.
- `src/PHOTO_GUIDE.md`: image inventory and placements.
- `src/PROJECT_GUIDE.md`: how to edit project rankings and content.
- `public/resume/Christian_Macomber_Resume.pdf`: résumé displayed on the Resume page; replace with a newer PDF using the same filename or update `site.js`.

## Known TODOs

- Supply a portrait photo for the About Me section; the current area is an intentional placeholder.
- Add your GitHub profile URL and optional project repository URLs when ready. Empty links are intentionally not clickable.
- Replace the Casino Simulator temporary trailer URL with your improved trailer.
- Add gameplay clips/GIFs if you want motion in the hero and floating bubbles; the current version uses your actual still screenshots.
- Review project titles, descriptions, and any differences between older résumé wording and current project details.

No personal information from the reference developer is included.
