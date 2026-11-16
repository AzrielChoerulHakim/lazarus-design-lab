(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  function closeMenu() {menu.setAttribute('aria-expanded', 'false');menu.setAttribute('aria-label','Buka menu');nav.classList.remove('open');}
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Tutup menu':'Buka menu');nav.classList.toggle('open',open);});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  document.addEventListener('click',event=>{if(!header.contains(event.target))closeMenu();});
  const skills = {
    admin: {kicker:'IN THE NOTEBOOK / 01', title:'Rapi itu ada seninya.',description:'Dari administrasi hukum sampai pencatatan transaksi dan inventaris, aku belajar bahwa pekerjaan jadi lebih mudah diikuti kalau catatannya tertata.',tags:['Legal administration','Sales & inventory administration','Microsoft Office']},
    document: {kicker:'IN THE NOTEBOOK / 02',title:'Berkas punya ceritanya.',description:'Saat magang, aku membantu memeriksa kelengkapan berkas perkara dan mengarsipkan dokumen. Dari kuliah, aku juga mengenal dasar penyusunan kontrak hukum.',tags:['Case-file management','Legal contract drafting','Document archiving']},
    service: {kicker:'IN THE NOTEBOOK / 03',title:'Bekerja, ketemu orang!',description:'Pengalaman di toko, outlet, dan kasir mengajarkanku untuk berkomunikasi dengan pelanggan, menjaga ketepatan transaksi, dan bekerja bareng tim.',tags:['Customer service','POS transactions','Team collaboration']}
  };
  const tabs=[...document.querySelectorAll('[data-skill]')]; const panel=document.querySelector('#skill-panel');
  function activate(index,focus=false){const chosen=tabs[index]; const entry=skills[chosen.dataset.skill];tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});panel.setAttribute('aria-labelledby',chosen.id);document.querySelector('.panel-kicker').textContent=entry.kicker;document.querySelector('#skill-title').textContent=entry.title;document.querySelector('#skill-description').textContent=entry.description;document.querySelector('#skill-tags').replaceChildren(...entry.tags.map(text=>{let s=document.createElement('span');s.textContent=text;return s;}));if(focus)chosen.focus();}
  tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(i));tab.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(i+1)%tabs.length;else if(event.key==='ArrowLeft')target=(i+tabs.length-1)%tabs.length;else if(event.key==='Home')target=0;else if(event.key==='End')target=tabs.length-1;else return;event.preventDefault();activate(target,true);});});
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduced && 'IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px 35px 0px'});document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));}else{document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));}
})();
