# Aurelya — Hal-hal kecil, yang berarti.

A personal portfolio website for Hanindhiya Daffa Aurelya, built in the Storybook Crayon direction for Lazarus Dev.

## Preview and deployment

This is a static HTML/CSS/JavaScript site. No build step and no runtime API keys are required.

- **GitHub Pages:** enable GitHub Pages with **GitHub Actions** as its build/deployment source. A workflow is included in `.github/workflows/pages.yml`.
- **Vercel:** import the repository. Choose **Other** as framework, leave Build Command empty, and use the repository root (`.`) as output directory.
- **Local:** open `index.html` or run `python -m http.server 8000` and open `http://localhost:8000`.

## Content and assets

The portfolio is based on the client-supplied resume and two derivative photographs supplied for the project. Original images and the full resume are deliberately not bundled in the public website, and the phone number is not published. Verify permission to publish the photos and contact details before forwarding to a third party or deploying under the client's identity.

Professional roles, academic details, courses and year references follow the client resume. Headline and illustrations are editorial presentation, not quotations or claims of additional professional work. The court internship is accurately labeled as an internship, not licensed independent legal practice.

## Notes

- Accessible mobile menu, semantic links and tabbed skills notebook; reduced-motion support.
- Images are modern WebP format, with alt text and intrinsic dimensions.
- No analytics, trackers, cookies, backend, or third-party JavaScript.
- Google Fonts load when network is available; serif/sans/handwritten system fallbacks are provided.
