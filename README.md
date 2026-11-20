# Studio 137 website

A single-page React site (built with Vite) for Studio 137, deployed to GitHub Pages.

## Edit the content

All text lives in `src/content.js`: tagline, intro, services, case studies and email.
The case study approach and result details are **example placeholders**. Replace them with real work before sharing the site.

Styling lives in `src/styles.css`. The colours are defined at the top as variables.

## Run it locally

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Deploy to GitHub Pages

1. Create a new repository on GitHub (for example `studio-137`).
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Studio 137 site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/studio-137.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. Your site will be at `https://<your-username>.github.io/studio-137/`.

## Custom domain (optional)

Add a file `public/CNAME` containing your domain (for example `studio137.com`), then point your domain's DNS at GitHub Pages as described in GitHub's docs.
