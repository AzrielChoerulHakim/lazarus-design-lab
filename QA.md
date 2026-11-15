# Quality Assurance — Field Experiment 001

## Status
**Static/source-level review performed; browser screenshot/e2e checks are configured in CI but their run status has not been independently confirmed in this authoring session.** Do not interpret this document as a claim that visual QA passed. A GitHub Actions job is included to capture 35 screenshots (320px, 390px, 768px, 1024px and 1440px × 7 concepts) and verify representative interactions; its artifacts must be inspected by a human reviewer.

## Verified during creation
- Retrieved source document was the one-page PDF titled “CV HANINDHIYA DAFFA AURELYA.pdf”.
- Reviewed four photos in the uploaded `Aurel.zip` contact sheet.
- GitHub connector confirmed repository permissions and **Public** visibility.
- GitHub connector confirmed seven template nodes and corresponding seven concept-selector controls.
- Checked `app.js` JavaScript parsing in a JS environment and the local file syntax; no syntax error was reported.
- Decoded both embedded WebP images from GitHub and confirmed valid RIFF/WEBP headers plus exact byte lengths.
- Confirmed main HTML omits raw phone number and raw CV download.
- Confirmed reduced-motion media query and multiple responsive CSS breakpoints are present.
- A GitHub Actions workflow exists for static verification and Playwright interaction/visual screenshots.

## Browser/device test matrix
| Test | Status | Evidence |
|---|---|---|
| Seven concept templates exist | PASS — source inspection | `index.html` |
| Concept selection implementation | PASS — source inspection only | `app.js`; NOT YET E2E-VERIFIED |
| JS parsing | PASS — syntax inspection | `app.js` |
| Embedded original-image derivatives | PASS — binary structure; browser rendering unverified | `assets/*.svg` |
| 320px, 390px, 768px, 1024px and 1440px rendering | NOT YET VERIFIED | CI Playwright screenshots pending; manual review required |
| Touch and keyboard navigation | NOT YET VERIFIED | CI covers button clicks; full keyboard audit pending |
| Zoom to 200% | NOT YET VERIFIED | Manual review required |
| Reduced motion | PARTIAL — stylesheet present; behavior not yet inspected | `styles.css` |
| Independent blind perception | NOT YET TESTED | Arrange evaluators |
| Photographic rights / consent | NOT YET CONFIRMED | Subject approval required |
| Live GitHub Pages availability | NOT YET CONFIRMED | Visit Pages settings / Actions |

## CI workflow
On push to `main`, `.github/workflows/verify.yml` runs:
1. Node JS syntax + seven-template/source/photo/privacy structural check
2. Playwright Chromium checks across five responsive widths
3. Upload `design-lab-visual-review` screenshot artifact

A second workflow (`.github/workflows/pages.yml`) attempts to deploy the static HTML/CSS/JS through GitHub Pages. GitHub repository settings and Actions permissions must allow Pages deployment. The expected URL is:
https://azrielchoerulhakim.github.io/lazarus-design-lab/

If Pages deployment fails, in GitHub go to **Settings → Pages → Build and deployment → Source: GitHub Actions**, then rerun the Pages workflow. You can also choose deploy from the `main` branch and `/ (root)` without the workflow, but don't use competing deployment modes simultaneously.

## Open issues / next iteration
- The two photo derivatives are intentionally highly compressed for a small public preview. For a production portfolio, replace with quality-controlled, licensed exports after confirmation.
- All seven artboards are experimental, not fully separate production websites. Their structure varies, but advanced reading/navigation states and deeper project pages are not yet built.
- All factual outcomes remain limited to the CV; client projects and legal case results are absent.
- Font loading depends on an external Google Fonts connection; system fallbacks are configured.
- The correct final voice and primary hiring audience must be confirmed with Aurelya. Avoid implying invented quotations or preferences.
- A reviewer should check whether the open index and dossier have text clipping at narrow widths. Typography was adjusted defensively, but without a successful browser render a pass claim would be misleading.

## Four anti-generic tests
**Identity swap:** The actual CV facts persist in all seven interpretations; may still need stronger firsthand material.

**Skeleton:** Each uses a materially different navigation/content order, not a forced seven-way cloning of seven Atlas sources.

**Rationale:** Every concept is anchored to legal administration, precision, operations, education or authentic portraiture, with a documented drawback.

**Blind perception:** not tested; do not claim a measured “anti-AI” success rate.
