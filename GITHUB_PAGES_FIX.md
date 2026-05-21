# GitHub Pages — one-time setup

The site at **https://larryshawgh.github.io/anushka-portfolio/** only works when GitHub Pages serves the **production build**, not the `main` branch source files.

## Fix (about 1 minute)

1. Open **https://github.com/LarryShawGH/anushka-portfolio/settings/pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually under **Actions**).
4. Wait for the workflow to finish; refresh the live URL.

## Why it was broken

- `main` contains the Vite dev `index.html` (`/src/main.tsx`), which cannot run on static hosting.
- The workflow builds `dist/` and deploys it via GitHub Actions; that artifact must be selected as the Pages source.
- If Source is set to branch **main** / folder **/** , visitors only see a blank page.

## After it works

- Home: https://larryshawgh.github.io/anushka-portfolio/
- Routes like `/about` rely on `404.html` (copied from the build) for client-side routing.
