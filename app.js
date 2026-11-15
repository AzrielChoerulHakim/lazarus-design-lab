(() => {
  'use strict';

  const directions = [
    {name:'The Record',thesis:'Trust begins with what can be verified.',structure:'Personnel dossier → verified education → legal-administration evidence → operational record. Documentation, not imaginary case studies, defines the portfolio.',interaction:'Three record tabs change the highlighted verified credential or experience, while the photograph and document framing remain fixed.',tradeoff:'Strong for administration and compliance-oriented roles. Can feel institutional for someone applying to a creative or customer-facing workplace.'},
    {name:'Work / Method',thesis:'Professional character emerges from the work itself.',structure:'A vocabulary of four actual responsibilities — verify, organize, record, serve — leads to specific role evidence. Task logic replaces the traditional career chronology.',interaction:'Choose a verb to reveal what the CV actually says she did and in which workplace.',tradeoff:'Makes transferable capabilities obvious. It can blur dates and employer names unless those are kept attached to every responsibility.'},
    {name:'The Sequence',thesis:'Different workplaces build an evolving professional foundation.',structure:'Chronological milestones move from February 2024 through March–April 2025, with the legal internship and retail roles interpreted as connected but distinct experiences.',interaction:'Select dated milestones to update the current role, factual description, and progress indicator.',tradeoff:'Great for early-career trajectories, but visitors wanting specific qualifications need an easily accessible index.'},
    {name:'Open Index',thesis:'Remove the sales pitch and let the record speak.',structure:'A high-contrast, typographic public register presents work and education as directly inspectable rows instead of a centered hero followed by generic cards.',interaction:'Click or keyboard-activate a row to expand the exact facts; the expanded information stays within the register.',tradeoff:'Fast to scan and highly distinctive. The assertive type system may not fit every law-office or administrative hiring context.'},
    {name:'The Letter',thesis:'Attention to detail can be introduced through writing rather than spectacle.',structure:'An editorial introduction resembling a professional letter, with a supporting portrait, educational annotation, and straightforward contact action.',interaction:'Primarily linear reading with a real email action; deliberately avoids unnecessary motion and fabricated interactivity.',tradeoff:'Calm and personal, particularly with limited work samples. Requires carefully edited, employer-appropriate copy and should not impersonate the subject through invented quotations.'},
    {name:'Operations Desk',thesis:'Demonstrate systematic thinking through the information architecture.',structure:'File hierarchy → selected CV-backed record → details and provenance. It visually expresses document management without inventing dashboards or performance metrics.',interaction:'Switch between court internship, education, operations and certifications to load the corresponding document preview.',tradeoff:'Conceptually close to administrative work, but a simulated console can add complexity to information that might be easier to read as plain text.'},
    {name:'The Portrait',thesis:'Professional records belong to a person, not a template.',structure:'An immersive human portrait with three source-grounded anchors — education, court internship, operations — and a single contact action.',interaction:'The experience is intentionally quiet; visual hierarchy, photography and direct action replace a scripted animation.',tradeoff:'Strong identity and emotional clarity, but needs explicit links to detailed experience and image-use consent before becoming an official portfolio.'}
  ];

  const mount = document.getElementById('mount');
  const nav = Array.from(document.querySelectorAll('[data-concept]'));
  const init = Number(new URLSearchParams(location.search).get('concept'));
  let current = Number.isInteger(init) && init >= 1 && init <= 7 ? init : 1;

  function text(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  // Internal choice controls must expose their current state to assistive tech.
  function activateChoice(selector, selected) {
    mount.querySelectorAll(selector).forEach(button => {
      const active = button === selected;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function setupRecord() {
    const values = [
      ['01 — VERIFIED EDUCATION', 'UIN Syarif Hidayatullah Jakarta · Bachelor of Law · GPA 3.79/4.00'],
      ['02 — VERIFIED LEGAL INTERNSHIP', 'South Jakarta Religious Court · Legal Administration Support Intern · February 2024'],
      ['03 — VERIFIED OPERATIONS EXPERIENCE', 'Ramayana Ciplaz Depok · Cashier · March–April 2025; Breeze Ice Cream FH UI · Outlet Crew · September–December 2024']
    ];
    mount.querySelectorAll('[data-rec]').forEach(button => button.addEventListener('click', () => {
      const i = Number(button.dataset.rec);
      activateChoice('[data-rec]', button);
      text('record-k', values[i][0]);
      text('record-v', values[i][1]);
    }));
  }

  function setupMethod() {
    const values = [
      ['PRACTICE NOTE / 01', 'Verify the details.', 'At the South Jakarta Religious Court, supported lawsuit-receipt administration by checking completeness of information and submitted documents.', 'SOUTH JAKARTA RELIGIOUS COURT · FEB 2024'],
      ['PRACTICE NOTE / 02', 'Organize the record.', 'Prepared, processed and managed case files, assisting with archiving and compliance with court administrative procedures.', 'SOUTH JAKARTA RELIGIOUS COURT · FEB 2024'],
      ['PRACTICE NOTE / 03', 'Record with accuracy.', 'Processed payments with POS machines and recorded daily sales transactions to support reporting.', 'RAMAYANA CIPLAZ DEPOK · MAR–APR 2025'],
      ['PRACTICE NOTE / 04', 'Serve with care.', 'Provided customer service and supported outlet operations, sales and daily inventory reporting.', 'BREEZE ICE CREAM FH UI · SEP–DEC 2024']
    ];
    mount.querySelectorAll('[data-method]').forEach(button => button.addEventListener('click', () => {
      const i = Number(button.dataset.method);
      activateChoice('[data-method]', button);
      ['method-number', 'method-title', 'method-text', 'method-place'].forEach((id,k) => text(id, values[i][k]));
    }));
  }

  function setupSequence() {
    const values = [
      ['FEB 2024', 'Legal Administration Support Intern', 'Supported case-file processing and legal-document archiving at the South Jakarta Religious Court.'],
      ['AUG–SEP 2024', 'Crew Outlet · ITC Depok', 'Assisted clothing-store operations, customer service, transactions and daily inventory/sales reporting.'],
      ['SEP–DEC 2024', 'Outlet Crew · Breeze Ice Cream FH UI', 'Provided customer service, handled sales transactions and supported inventory and daily sales reports.'],
      ['MAR–APR 2025', 'Cashier · Ramayana Ciplaz Depok', 'Processed cash, debit and card transactions and recorded daily sales to support reporting.']
    ];
    mount.querySelectorAll('[data-seq]').forEach(button => button.addEventListener('click', () => {
      const i = Number(button.dataset.seq);
      activateChoice('[data-seq]', button);
      ['seq-date', 'seq-role', 'seq-copy'].forEach((id,k) => text(id, values[i][k]));
      mount.querySelectorAll('.sequence-tracks span').forEach((line,k) => {
        line.style.opacity = String(k <= i ? 1 : .3);
        line.style.borderColor = k === i ? '#efac7d' : '#c2d6d3';
      });
    }));
  }

  function setupIndex() {
    mount.querySelectorAll('[data-index]').forEach(button => button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
      mount.querySelectorAll('[data-index]').forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        if (other.nextElementSibling) other.nextElementSibling.hidden = true;
      });
      button.setAttribute('aria-expanded', String(shouldOpen));
      content.hidden = !shouldOpen;
    }));
  }

  function setupDesk() {
    const values = [
      ['01_COURT_INTERNSHIP.txt', 'Legal administration,\nin practice.', 'Supported lawsuit receipt, document-completeness checks, case-file processing and archiving during an internship at the South Jakarta Religious Court in February 2024.', 'COURT INTERNSHIP', 'FEB 2024'],
      ['02_EDUCATION.txt', 'A legal\nfoundation.', 'Bachelor of Law, UIN Syarif Hidayatullah Jakarta (2021–2026). Recorded GPA: 3.79/4.00.', 'BACHELOR OF LAW', '2021–2026'],
      ['03_OPERATIONS.txt', 'Responsibility\nin motion.', 'Worked in retail operations and service at ITC Depok, Breeze Ice Cream FH UI, and Ramayana Ciplaz Depok. Duties included transactions, stock and daily reporting.', 'OPERATIONS & SERVICE', '2024–2025'],
      ['04_CREDENTIALS.txt', 'Learning\nbeyond campus.', 'HR Intensive Bootcamp (Harisenin.com, June 2026); Data Formatting & Cleansing class (MySkill, Nov 2024); Criminal Court Simulation Training (UIN Jakarta, Aug–Sep 2024).', 'TRAINING & CLASSES', '2024–2026']
    ];
    mount.querySelectorAll('[data-desk]').forEach(button => button.addEventListener('click', () => {
      const i = Number(button.dataset.desk);
      activateChoice('[data-desk]', button);
      ['desk-filename', 'desk-title', 'desk-copy', 'desk-record', 'desk-date'].forEach((id,k) => text(id, values[i][k]));
    }));
  }

  function render(id, updateHistory = true) {
    if (id < 1) id = 7;
    if (id > 7) id = 1;
    current = id;
    const template = document.getElementById('concept-' + id);
    mount.replaceChildren(template.content.cloneNode(true));
    mount.querySelectorAll('[data-rec], [data-method], [data-seq], [data-desk]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    });
    const direction = directions[id - 1];
    text('active-heading', String(id).padStart(2,'0') + ' / ' + direction.name);
    text('active-total', String(id).padStart(2,'0') + ' — 07');
    for (const key of ['thesis','structure','interaction','tradeoff']) text(key,direction[key]);
    nav.forEach(b => b.setAttribute('aria-pressed',String(Number(b.dataset.concept) === id)));
    if (id === 1) setupRecord();
    else if (id === 2) setupMethod();
    else if (id === 3) setupSequence();
    else if (id === 4) setupIndex();
    else if (id === 6) setupDesk();
    if (updateHistory) {
      const next = new URL(location.href);
      next.searchParams.set('concept',id);
      history.replaceState(null,'',next);
    }
  }

  nav.forEach(button => {
    button.addEventListener('click', () => render(Number(button.dataset.concept)));
    button.addEventListener('keydown', event => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const next = current + (event.key === 'ArrowRight' ? 1 : -1);
      render(next);
      nav[(current-1)].focus();
    });
  });
  document.getElementById('prev').addEventListener('click',() => render(current-1));
  document.getElementById('next').addEventListener('click',() => render(current+1));
  window.addEventListener('popstate',() => {
    const n = Number(new URLSearchParams(location.search).get('concept'));
    if (Number.isInteger(n) && n >= 1 && n <= 7) render(n,false);
  });
  render(current);
})();