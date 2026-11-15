# Quality Assurance — Field Experiment 001

**Status as of 2026-11-15:** browser-tested prototype; **not a production-ready client portfolio**. Evidence is from an actual GitHub-hosted Chromium/Playwright run, artifact screenshots and a visual review of desktop and mobile captures.

## Reproducible verification

- [Successful browser workflow — run 43705123528](https://github.com/AzrielChoerulHakim/lazarus-design-lab/actions/runs/43705123528) on the completed QA branch, subsequently merged via [PR #1](https://github.com/AzrielChoerulHakim/lazarus-design-lab/pull/1).
- [Download original 35 browser screenshots and geometry report](https://github.com/AzrielChoerulHakim/lazarus-design-lab/actions/runs/43705123528/artifacts/14158257427) (GitHub Actions artifact; access may require GitHub sign-in).
- Viewport widths tested: 320, 390, 768, 1024, 1440 CSS px; one screenshot per concept per width, **35 screenshots total**.
- All concept selection and representative internal state checks passed, including `aria-pressed` for Record, Method, Sequence and Operations Desk.
- Both embedded SVG/WebP photograph resources were fetched and returned HTTP 200 from the local test server.
- No JavaScript page exceptions were reported by the automated browser check, and no whole-document horizontal overflow occurred. Geometry scan found **0 of 35** artboard/viewport combinations with the sampled h2/h3/p/strong/button boxes extending past artboard bounds.
- **Important:** passing geometry does **not** establish readable small type, correct image crops, contrast, keyboard-only UX, zoom behavior, production performance or aesthetic quality.

## Direct visual inspection of browser screenshots

### Problems identified and corrected
| Concept | Observed at 320–390px | Change made |
|---|---|---|
| 01 The Record | Two narrow columns cropped the subject's face and compressed the copy | Stacked identity and full-width portrait, increased readable text sizes, better tabs |
| 05 The Letter | 70/30 letter-photo columns caused tiny text and partial-face crop | Full-width letter text; photo and captions moved below into a separate responsive group |
| 06 Operations Desk | 33/67 file-panel layout squeezed filenames and the case preview | Document files became a two-column selection grid above full-width details |
| 04 Open Index | Very compressed uppercase headline reduced clarity | Adjusted headline line height and tracking |
| 07 The Portrait | Landscape photo was dark and inadequately framed on mobile | Improved brightness and removed repeated background; repositioned image for a usable crop |

### Remaining visible limitations
1. **Concept 07 still needs better art direction.** The 240×160px embedded landscape graduation photo remains a weak source for a large vertical hero, and the subject appears faint behind the title at 390px. A properly approved **portrait-orientation** photo, purposeful responsive crop and contrast check are required.
2. **Photo sharpness is low.** The public repo intentionally uses compressed SVG-embedded WebP derivatives of about 240×320 and 240×160 px. They are adequate for rough prototypes but visibly soft when expanded. Do not silently publish higher-resolution subject photos without verifying consent and usage rights.
3. **Seven ideas are not seven complete websites.** The lab shows seven original interactive artboards within one shared explorer shell. Deep case-study pages, richer content pathways, and fully integrated employer-specific journeys have not been built.
4. **AI-generic visual tendency remains partly visible.** Multiple artboards still use a large display headline, tiny uppercase labels and similar editorial metadata. This is the exact kind of house-style convergence the Design OS intends to prevent; future experiments should diverge at the composition and storytelling level, not only color.
5. **No independent blind perception review** has been done. Distinctiveness cannot be declared proven.
6. **No full keyboard-only, screen reader, 200%-zoom, contrast-ratio or real mobile-device review** has been completed. Browser tests use desktop Chromium viewports; a passed emulated viewport is not equal to touch and accessibility validation.
7. **Live GitHub Pages publication was not confirmed in the browser used for the authoring audit.** The CI run rendered repository files on a local HTTP server. Check [Pages](https://github.com/AzrielChoerulHakim/lazarus-design-lab/settings/pages) and [Actions](https://github.com/AzrielChoerulHakim/lazarus-design-lab/actions) separately for live deployment status.
8. **Fonts use Google Fonts**, with local fallbacks defined in CSS. Check layout again with external font loading blocked.

## Source integrity and privacy

The baseline is the user-supplied one-page PDF `CV HANINDHIYA DAFFA AURELYA.pdf` and four supplied photographs. The visible site represents the court *internship* as support/administration; it does not fabricate legal case wins, independent legal practice, measured accomplishments, endorsements or client projects.

The repo is **PUBLIC** and visibly publishes a full name, professional email and portrait/graduation image derivatives. The raw CV, personal telephone number and full photographic archive are **not** published. Confirm that the subject approves the public display of her portrait and professional information before treating this as her official portfolio.

## Running the checks
```sh
npm install
npm run verify
npx playwright install chromium
npm run test:e2e
```

`npm run test:e2e` generates `screenshots/*.png` and `screenshots/geometry-report.json`. Geometry scanning reports potential layout issues but intentionally does not treat all creative overflows as failures; review every screenshot manually. GitHub Actions uploads the screenshots and JSON as an artifact.

## What is safe to say
**Validated:** source syntax, seven selectable concepts, representative tab/record interactions, image resource responses, no whole-page horizontal overflow in the tested Chromium viewports, no sampled off-artboard boxes, and screenshot capture.

**Not yet validated:** official consent and licensing, externally hosted website availability, subjective originality, full accessibility, real-device usability, high-resolution photography, production readiness.

## Recommended next iteration
Obtain subject approval and a more suitable portrait, then choose one of the best-fit work-centric directions (**01 The Record or 02 Work / Method**) for a true professional portfolio. Develop full information architecture, meaningful secondary pages and employer-relevant material rather than polishing all seven demos indefinitely. Keep the remaining artboards as research hypotheses.
