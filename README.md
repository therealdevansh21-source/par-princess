# Once Upon a Pari

A static, mobile-first Princess Day fairytale site made for Pari. It uses the supplied photographs as-is (with orientation corrected for two sideways selfies), custom-written notes, a special final Cinderella kiss scene, and an interactive envelope letter.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deploy to Vercel

### Option A — Vercel CLI

1. Install Node.js if it isn't already installed.
2. Install the Vercel CLI: `npm i -g vercel`
3. Open a terminal in this folder.
4. Run `vercel` and follow the prompts.
5. When you're happy with the preview, run `vercel --prod`.

### Option B — GitHub import

1. Upload the contents of this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the framework preset as **Other**. No build command is needed; the site is plain HTML/CSS/JavaScript.
4. Deploy.

All photographs are stored locally in `assets/`; no external image hosting is required. Google Fonts are used as progressive enhancement; the site falls back to system fonts if they are unavailable.
