# V3 Photo & Video Guide

Edit the filenames or paths in `src/data/projects.js` (project cards and galleries) and `src/data/site.js` (`homeBubbles`). All paths start at `/` and map to files under `public/`.

## Bubbly Wubbly

| ID | Filename | Image content | Current placement |
|---|---|---|---|
| BW-01 | `public/media/bubbly-wubbly/combat.png` | Graveyard combat, player surrounded by skeleton enemies | Home featured card, Portfolio card, project hero, gallery, Home hero left, bubble-left |
| BW-02 | `public/media/bubbly-wubbly/exploration.png` | Graveyard exploration clearing | Project gallery |
| BW-03 | `public/media/bubbly-wubbly/magic-effect.png` | Player near building and glowing blue effect | Project gallery, bubble-bottom |
| BW-TRAILER | https://youtu.be/vUk7OONuoZI | Gameplay trailer | Project detail page, Watch Gameplay Trailer |

## Casino Simulator

| ID | Filename | Image content | Current placement |
|---|---|---|---|
| CS-01 | `public/media/casino-simulator/shot-1.png` | Red main menu | Project gallery |
| CS-02 | `public/media/casino-simulator/shot-2.png` | Slot machine gameplay | Project gallery, bubble-right |
| CS-03 | `public/media/casino-simulator/shot-3.png` | Blackjack hit/stand screen | Project gallery |
| CS-04 | `public/media/casino-simulator/shot-4.png` | Blackjack result/reset screen | Project gallery |
| CS-05 | `public/media/casino-simulator/shot-5.png` | Three Card Poker with cards revealed | Home featured card, Portfolio card, project hero, project gallery, Home hero right |
| CS-06 | `public/media/casino-simulator/shot-6.png` | Three Card Poker betting screen | Project gallery |
| CS-TRAILER | https://youtu.be/YsoZWkrOuJ8 | **TEMPORARY TRAILER — REPLACE WITH BETTER TRAILER** | Project detail page |

## Floating bubbles (Home closing section)

Bubble assignments are controlled in `src/data/site.js` → `homeBubbles`:

| Bubble ID | Current project | Current file | Position |
|---|---|---|---|
| `bubble-left` | Bubbly Wubbly | `combat.png` | Top-left of closing panel |
| `bubble-right` | Casino Simulator | `shot-2.png` | Top-right of closing panel |
| `bubble-bottom` | Bubbly Wubbly | `magic-effect.png` | Lower-right of closing panel |

Change `image`, `project`, and `link` together when assigning a bubble to another project. Positions are styled in `src/styles.css`.

## Media still needed

- `ABOUT-PORTRAIT`: Your personal portrait for the About section; currently a clearly labeled placeholder in `src/main.jsx`.
- `HOME-HERO-CLIPS`: Optional short MP4/WebM clips of your games. Current hero uses still images and dark overlays.
- `BUBBLE-CLIPS`: Optional short looping clips; current bubbles use still images.
- Horror Game: No images provided yet.
- Custom Game Controller: No images provided yet.

## Adding new media

Put images in `public/media/<project-id>/`, give them descriptive filenames, then update the project's `image` and `gallery` paths in `src/data/projects.js`. Each image can be viewed full-size by clicking it in a project's gallery. Prefer 16:9 landscape screenshots for the wide cards; keep important content near the center because the card uses `object-fit: cover`.
