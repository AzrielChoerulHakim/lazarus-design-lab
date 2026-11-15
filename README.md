# LAZARUS DESIGN LAB — Field Experiment 001

**Seven different, source-grounded portfolio concepts for one real brief.** Built to test [Lazarus Design OS](https://github.com/AzrielChoerulHakim/lazarus-design-os) rather than to deliver seven identical templates.

## Subject & provenance
The experiment uses the supplied resume **“CV HANINDHIYA DAFFA AURELYA.pdf”** and the supplied four-photo `Aurel.zip`. The CV confirms that Hanindhiya Daffa Aurelya graduated with a law degree from UIN Syarif Hidayatullah Jakarta (2021–2026, GPA 3.79/4.00); was a legal-administration support intern at the South Jakarta Religious Court (Feb 2024); worked at ITC Depok (Aug–Sep 2024), Breeze Ice Cream FH UI (Sep–Dec 2024), and Ramayana Ciplaz Depok (Mar–Apr 2025); and lists legal administration, contract drafting, office applications, and sales/inventory administration among skills. No invented work projects, numerical outcomes or endorsements.

**Privacy:** This GitHub repository is PUBLIC. The raw CV, telephone number, and entire photographic archive are intentionally NOT committed. Contact is presented with a professional email and public LinkedIn link from the CV. Two photographs included in the concept site are compressed derivatives of user-supplied material. Confirm subject consent and usage rights before treating this as an official public portfolio. This remains an experiment.

## Seven structurally different directions
1. **The Record** — archival evidence dossier and tabbed credential record.
2. **Work / Method** — task-to-competency correspondence, reveal actual roles.
3. **The Sequence** — chronological experience narrative with time as navigation.
4. **Open Index** — typography-led searchable/expandable work register.
5. **The Letter** — literary self-introduction, minimal proof in marginalia.
6. **Operations Desk** — document-centric work interface and role inspector.
7. **The Portrait** — image-led identity with dual professional contexts.

**These are seven distinct design explorations**, not seven fictional careers or seven complete deployed client websites. The active preview changes structure and visual language. They are meant to be compared, rejected and refined.

## Preview
- Open [index.html](index.html) or run `python3 -m http.server 8000` then navigate to `http://localhost:8000/`.
- Select any concept 01–07 in the strip or use previous/next buttons.
- Try the internal controls for each concept.
- On GitHub Pages (if enabled): `https://azrielchoerulhakim.github.io/lazarus-design-lab/`.

## Source-of-truth limits
No standalone writing samples, legal case outcomes, independent client engagements, references, or employer endorsements were provided. Do not infer that the legal internship was independent legal practice. Roles and skills are represented using the CV language and dates, while conceptual headlines are editorial interpretation, not quotations from Aurelya.

## Apple-level craft audit

Read [APPLE_CRAFT_AUDIT.md](APPLE_CRAFT_AUDIT.md) for the source-grounded visual critique, design changes, real-browser checks, and the known production blockers. Apple design is used as a **principle-based quality standard**, never as a copied style preset.

## Evaluation
See [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) for all seven concepts and their tradeoffs and [QA.md](QA.md) for verification. No claim of science-backed originality score. Visual quality must be inspected on real devices and tested with the subject.

## GitHub Pages preview
The repository has a Pages deployment workflow at `.github/workflows/pages.yml`, plus a separate visual verification workflow. If `https://azrielchoerulhakim.github.io/lazarus-design-lab/` does not load, open [Settings → Pages](https://github.com/AzrielChoerulHakim/lazarus-design-lab/settings/pages) and set the source to **GitHub Actions**, then check [Actions](https://github.com/AzrielChoerulHakim/lazarus-design-lab/actions). A workflow existing does not prove a deployed website exists.

## QA commands
```sh
npm install
npm run verify
npx playwright install chromium
npm run test:e2e
```
The browser script captures 42 concept/viewport screenshots and checks interactive state. Visual artifacts must be reviewed manually; see [QA.md](QA.md).

## Stack
Static HTML, CSS, and vanilla JavaScript. No framework or build step. Accessible buttons and semantic information, reduced-motion behavior and responsive layout.

_Generated in 2026 as a design-system experiment, not an official representation of the subject._
