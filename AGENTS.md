# LAB AGENT RULES

Read the upstream [Lazarus Design OS](https://github.com/AzrielChoerulHakim/lazarus-design-os) `AGENTS.md`, `DESIGN.md`, `docs/WORKFLOW.md`, `docs/APPLE_CRAFT_STANDARD.md`, and `docs/ANTI_GENERIC_AUDIT.md` before major revisions.

This lab's source-of-truth is the **user-supplied** CV “CV HANINDHIYA DAFFA AURELYA.pdf” and the four user-supplied photographs (not included in this public repo). Read [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) for verified CV details and explicit unknowns.

## Required behavior
- Respect that this is a **PUBLIC demo**. Do not add raw CV, phone number, complete photo archive, employer endorsements, court case information, or unapproved personal details to GitHub.
- No invented personal projects, legal victories, performance metrics, personal quotes, or claims of independent legal practice.
- The site contains **seven distinct portfolio concepts**, not seven cosmetic themes. Keep their navigation and content anatomy meaningfully different.
- Editorial headlines are conceptual; they are not quotations from the subject.
- Work from verified facts in [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md); report any new source discrepancy.
- Motion must support comprehension and be interruptible; honor reduced-motion.
- Keep selection/accordion controls keyboard-accessible with semantic labels.
- A build passing does not mean visual QA passed; consult [QA.md](QA.md), inspect screenshots and device states.
- Test locally using `npm run verify` and `npm run test:e2e` (after `npm install` and `npx playwright install chromium`).
- Do not claim Google Fonts, user-provided photographs or CV content are freely redistributable beyond the permitted user-controlled experiment.

## Deliverable
A working interactive study, documented concept tradeoffs, honest verification results and reproducible deployment instructions. Never present this demo as the subject's official site without their approval.
