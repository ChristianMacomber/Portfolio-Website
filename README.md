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


## Cloudflare Pages deployment

**Git-connected deployment**
- Framework preset: Vite
- Root directory: repository root (leave empty if files are at the root)
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 (set `NODE_VERSION=22` if needed)

Upload the **contents** of this ZIP to your repository root. `package.json` and `index.html` must appear at the top level.

**Direct upload:** This is a source-code ZIP, not a built website. For Cloudflare Pages direct upload, run `npm install` and `npm run build` locally, then upload the generated `dist/` directory.

Internal navigation uses hash routes, so special redirect rules are unnecessary.
If deployment fails, check the first error in the Cloudflare build log.

## V4 redesign — Pixel UI / software engineering

V4 keeps the same React/Vite pages, project data, screenshots, trailers, resume and contact links as V3, while updating the whole site's visual language.

- **Navigation:** pixel-framed software-engineer menu, status indicator, accessible mobile menu, and a light/dark toggle.
- **Default theme:** dark. A visitor's explicit choice is stored in browser `localStorage` under `cm-theme`; first visits always default to dark.
- **Home:** original CSS/SVG pixel-art landscape (`public/theme/pixel-landscape.svg`) overlaid with existing real project media, plus a software-engineering introduction.
- **Interior pages:** restrained, pixel-bordered project cards, project detail pages, résumé frame, and contact panels.
- **Editable theme:** `src/v4-theme.css` contains the color variables, frame treatments and responsive layout. Change `--accent`, `--bg`, etc. for broad palette updates. Edit the original SVG scene at `public/theme/pixel-landscape.svg`.
- **Editable status:** search `SEEKING SUMMER 2027 INTERNSHIPS` in `src/main.jsx` to change the visible status text. Green means actively seeking opportunities, not a real-time availability service.

### Deploy to Cloudflare Pages

Extract this archive and replace your repository's old source files with the **contents** of the V4 folder, keeping `package.json` and `index.html` at the root. Do not leave old V1/V2 `App.jsx` or `App.css` in the root. Commit/push, and use **Vite**, build command `npm run build`, output directory `dist`, and Node.js 22.

This archive contains source code, **not** the compiled `dist` output. If uploading directly to Cloudflare Pages, run `npm install && npm run build` locally and upload `dist`.

### Still pending

- Add a portrait to replace the About photo placeholder.
- Add your GitHub profile URL in `src/data/site.js` (currently blank to avoid inventing a link).
- Replace the Casino Simulator trailer with your improved version when available.

V4 source has been packaged and ZIP-checked, but a production build could not be completed in this environment because npm dependency installation timed out. If Cloudflare reports a build error, inspect the first error line in the build log.
