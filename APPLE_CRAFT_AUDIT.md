# Apple Craft & Anti-Generic Audit — 15 November 2026

**Scope:** Seven CV-based portfolio design experiments, not an official website or production sign-off. Inspected against the one-page CV, photographs provided by the user, and actual Chromium captures.

**Apple design basis:** [Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles/), [Motion](https://developer.apple.com/design/human-interface-guidelines/motion), and [UI Design Dos & Don'ts](https://developer.apple.com/design/tips/). Apply purpose, agency, responsibility, simplicity, flexibility, craft and meaningful motion without adopting Apple branding or Apple.com page templates.

## Problems discovered
- Repeated AI-default formula across different structures: giant hero statement, italic serif, tiny monospace labels and arbitrary decorative shapes.
- Generic headlines said little about the CV. The copy was replaced with law education, court administration, retail operations and service tasks.
- The Operations Desk used fictional text-file labels and ambiguous status indicators, even though only factual CV sections were available. It now uses a truthful record-browser model.
- Open Index originally omitted the ITC Depok experience. It now covers **all four work roles and the academic qualification** in five expandable CV-sourced entries.
- Small responsive screens had too much tiny text, image cropping and occasional ambiguous selection during a tab-color animation. Layouts, label sizes, portrait framing and immediate selection states have been refined.
- External font fetching was unnecessary. The site now uses system typography and topic-appropriate local serif treatments.

## Seven distinct structures retained
1. The Record — personal evidence dossier and credential chapters.
2. Work / Method — real task-to-employer correspondence.
3. The Sequence — factual date-indexed experience.
4. Open Index — expandable professional register with five entries.
5. The Letter — editorial introduction, photograph and direct email.
6. Operations Desk — factual sections, not mock technical files.
7. The Portrait — person-focused biography, real photo and career anchors.

The source content remains the CV; the design anatomy changes. These seven approaches are **not seven cloned Apple pages**.

## Reproducible browser review
The GitHub Actions Playwright workflow checks the seven artboards at 320, 390, 640, 768, 1024 and 1440 CSS px, producing **42 full-page screenshots** plus a geometry report. It also checks whole-document overflow, selected navigation states, keyboard arrow handling and focus, representative content interactions, source asset responses, and 44px top-level concept hit areas. Source validation and JavaScript parsing are required before the browser phase.

**Inspect the latest actual GitHub Actions run**, including screenshots. Automation cannot prove aesthetic quality, correct image crops, realistic client identity, or flawless contrast.

## Remaining release blockers / unknowns
- Public use of the subject's photographs and contact details needs explicit confirmation. This repo remains an experiment.
- The embedded photo derivatives are approximately 240px wide and visibly soft when expanded; higher-resolution permitted images are required for a production portfolio.
- Independent perception tests for “AI generic,” real-device Safari/Android testing, true 200% browser zoom, comprehensive WCAG review, and measured color contrast have **not** been certified.
- A CI pass alone does not prove GitHub Pages deployment. Verify its live URL and source settings separately.
- Apple HIG is primarily platform guidance; reusing its principles does not prove conformity to every platform rule or guarantee originality.

## Release assessment
**Experimental design lab: acceptable after CI and manual screenshot review. Official client portfolio: NOT YET APPROVED.** Before production, secure consent, replace low-res photos, identify the real hiring audience, select one concept, test on devices, and perform an independent editorial/accessibility review.

## Commands
- npm install
- npm run verify
- npx playwright install chromium
- npm run test:e2e

Latest artifacts are attached to the Verify design lab GitHub Actions workflow as design-lab-visual-review.
