# V3 Project Guide

The source of truth for project content is **`src/data/projects.js`**. Each project is one JavaScript object with these fields:

- `id`: unique URL identifier, such as `bubbly-wubbly`.
- `rank`: a number; lower numbers appear higher on the Portfolio page.
- `featured`: `true` or `false`. Home shows up to two `featured:true` projects, ordered by rank.
- `title`, `eyebrow`, `year`, `summary`: information shown on Portfolio and Home cards.
- `overview`, `role`, `team`, `technologies`, `contributions`: content on the dedicated project page.
- `image`: the main card and detail hero screenshot.
- `gallery`: list of image paths shown on the project detail page.
- `trailer`: external trailer URL (blank to hide the trailer button).
- `github`: optional project repository URL (blank to hide).

## Current proposed ordering

| Rank | Project | Featured on Home? |
|---|---|---|
| 1 | Bubbly Wubbly | Yes |
| 2 | Casino Simulator | Yes |
| 3 | Horror Game (In Development) | No |
| 4 | Custom Game Controller | No |

This ranking is a starting point, not an objective assessment. Change it any time.

## To change a starred project

For example, to feature the Horror Game instead of Casino Simulator, change the Horror Game's `featured` to `true` and Casino Simulator's to `false`. Home updates automatically. The Portfolio page always lists **all** projects in rank order.

## To add a new project

Duplicate one project object, give it a unique `id`, update its content and media, and assign `rank` and `featured`. It will automatically appear in Portfolio and have a working project detail route. The first two `featured:true` projects by rank appear on Home.

## Content notes / pending updates

- **Casino Simulator trailer:** `https://youtu.be/YsoZWkrOuJ8` is temporary. Replace it with the improved version when provided.
- **GitHub links:** Not provided yet; keep blank rather than inventing links.
- **Horror Game:** Work in progress; do not imply the game has shipped or that planned features are finished.
- **About portrait, horror images, controller images:** Not provided yet; show placeholders.
- **Source preference:** The supplied résumé and cover letter guide the technical descriptions, supplemented by the user's stated project roles and contributions. Review any résumé revisions as they become available.
