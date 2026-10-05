# Deyu Chen’s Academic Homepage

Personal academic website for Deyu Chen (陈德宇), South China University of Technology.
Based on [Laip11/academic-homepage-template](https://github.com/Laip11/academic-homepage-template), with its burgundy theme, floating navigation, frosted container, and publication cards.

## Preview and check

Requires Node.js 18 or newer. No dependencies to install.

```sh
npm run dev
# http://127.0.0.1:4321
npm run lint
npm run build
```

After editing content, run `npm run build` and refresh the preview. `npm run preview -- --port 8000` selects a different port.

## Edit content

- `content/profile.md`: name, affiliation, portrait, and contact links.
- `content/main.md`: biography, news, publications, research, education, honors, and patents.
- `templates/homepage.html`: template, navigation, metadata, styling, and scroll behavior.
- `index.html`: generated, complete page served directly by GitHub Pages.
- `images/photo.png`: portrait retained from the previous homepage.

The `.md` files contain HTML fragments, following the original template’s format. Run `npm run build` locally to embed them into the root `index.html`, with a matching copy in `dist/` for preview. Commit the generated root page along with content edits. The complete academic record is readable without JavaScript or a third-party Markdown CDN.

## Publishing

GitHub Pages uses **Deploy from a branch → main → / (root)**. Run `npm run lint` locally, commit the updated root `index.html`, and push to `main`. No custom Actions workflow is required. The site is configured for `https://davy-chendy.github.io/`; update canonical/Open Graph URLs, `robots.txt`, and `sitemap.xml` if the domain changes.

## Content policy

Updated from the October 2026 CV. Publications lists published papers only; FATE appears as ongoing work in Research Experience at the owner’s request. Self-evolving LLMs are described as a research interest. Review details, the full CV, telephone number, and birthday are excluded. Publication wording and author information follow the supplied CV. Do not add private application documents to the deployment directory.

The migration retains the original portrait and contact links. The superseded Astro template is recoverable in Git history. Template attribution and both applicable MIT notices are retained in `LICENSE`.
