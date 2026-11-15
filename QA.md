# Quality Assurance · Lazarus Design Lab

**Audit date:** 15 November 2026. **Project status:** seven evidence-led concept prototypes, not an approved client website.

## Source and design criteria
- Content basis: the supplied one-page CV of Hanindhiya Daffa Aurelya. Four experience roles and one academic qualification are represented in the expandable work register. No legal victories, client projects or outcomes were invented.
- Apple HIG standards applied as design judgment: purpose, agency, responsibility, familiarity, flexibility, simplicity and craft, not Apple visual imitation.
- Full critique and known limitations: [Apple Craft Audit](APPLE_CRAFT_AUDIT.md).
- The subject's public-portfolio consent and photograph redistribution rights are **not independently confirmed**.

## Automated verification
GitHub Actions: [Verify design lab](https://github.com/AzrielChoerulHakim/lazarus-design-lab/actions/workflows/verify.yml).

Commands:
- npm install
- npm run verify
- npx playwright install chromium
- npm run test:e2e

The browser script covers 7 concepts × 6 CSS viewport widths (320, 390, 640, 768, 1024, 1440) and writes **42 full-page screenshots** plus a geometry report. It checks concept selection, internal Record/Method/Sequence/Index/Desk controls, keyboard arrow navigation with focus transfer, 44px direction-selector targets, asset responses, missing local resources and visible document overflow. The structural verifier checks image bytes, public privacy safeguards, CSS links and JavaScript parsing.

**The latest workflow run is the source of truth for pass/fail.** Do not infer success merely from committed test scripts. Inspect the screenshot artifact: design-lab-visual-review.

## Human visual review
Prior and revised desktop/mobile browser screenshots were inspected. Problems identified and addressed:
- Repeating AI-default editorial slogans and decorative pillars instead of CV-specific structure
- Unreadable micro-labels and crowded mobile information hierarchy
- Four-item register omitting the ITC Depok job (fixed to five sourced entries)
- Fake file-extension labels in the administrative concept (replaced with truthful CV record categories)
- Dim or poorly cropped image-led portfolio concept (reframed with an explicit portrait panel)
- Unnecessary external font loading and animated selector state

There is no claim that a machine verified aesthetic originality. A **blind perception review with independent people has not been performed**.

## Not certified by the current tests
True browser 200% zoom, VoiceOver/TalkBack, full WCAG color contrast audit, physical iOS/Android devices, image-use consent, production photo resolution, live GitHub Pages deployment, target-audience validation, and external blind originality scores. These remain release blockers for a real client's official website.

## Production assessment
**Lab preview: experimental / reviewable. Client production: not signed off.** The next step for a genuine client delivery is to select one approved concept, acquire permitted high-resolution portrait assets, and perform separate accessibility and device testing.

Previous historical audit remains traceable through GitHub history and archived Actions runs; this page intentionally reflects the current six-viewport test matrix rather than the older 35-screenshot run.
