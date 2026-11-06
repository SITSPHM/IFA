# Interactive Presentation — Base Project

A starter scaffold for a browser-based, 16:9 interactive presentation. It uses plain HTML, CSS, and JavaScript. No build tools or dependencies are required.

## Run locally
Open `index.html` in a modern browser. For a more reliable local development experience, use VS Code with the Live Server extension.

## Publish with GitHub Pages
1. Create a GitHub repository and upload the contents of this folder.
2. In the repository, open **Settings → Pages**.
3. Under the build/deployment section, choose **Deploy from a branch**.
4. Select your main branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The URL will appear in the Pages settings.

## Controls
- Click a subject on the main menu to open it.
- `1`, `2`, `3`: open Math, Biology, or Geography.
- `←` / `→`: previous / next content page.
- `Home` or `Esc`: return to the menu.
- `End`: open the conclusion.
- `?`: open the controls reference.
- The invisible nose hotspot opens the conclusion. Its CSS position is only a placeholder; adjust it after adding the final character art.

## Where to edit
- `scripts/content.js`: subject names, page titles, text, bullet points, character lines, visual labels, and summaries.
- `styles/main.css`: colors, layout, typography, frames, and responsive behavior.
- `scripts/app.js`: navigation, keyboard controls, screen changes, and interactions.
- `assets/`: place your character sprites, backgrounds, diagrams, sound effects, and fonts here.

## Adding a visual to a page
The content data currently has `image: null` as a placeholder. The visual panel is a frame placeholder for now. When your assets are ready, the next development step is to make the visual panel display images and sprite animations based on each page's data.

## Notes
- The current character shapes are CSS placeholders, not final artwork.
- The nose hotspot is intentionally invisible. Adjust `.nose-secret` and `.secret-hotspot-content` in `styles/main.css` to match the nose position in your final character art.
- Google Fonts are loaded from the internet. If you need the presentation to work fully offline, replace them with locally stored font files or system fonts.
- Keep a local backup and test the deployed URL on the actual presentation computer before the presentation.
