import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const shots = path.join(root,'screenshots');
fs.mkdirSync(shots,{recursive:true});
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp'};
const server=http.createServer((req,res)=>{
  const url=new URL(req.url,'http://localhost');
  const local=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
  if(!local.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  fs.readFile(local,(err,data)=>{
    if(err){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':mime[path.extname(local)]||'application/octet-stream','Cache-Control':'no-store'});
    res.end(data);
  });
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const port=server.address().port;
const errors=[];
const geometry=[];
const browser=await chromium.launch({headless:true});
try{
  for(const width of [320,390,768,1024,1440]){
    const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
    page.on('pageerror',e=>errors.push(width+' JS runtime error: '+e.message));
    await page.goto('http://127.0.0.1:'+port+'/',{waitUntil:'load'});
    for(let i=1;i<=7;i++){
      await page.locator('[data-concept="'+i+'"]').click();
      await page.locator('#mount > article').waitFor();
      const active=await page.locator('[data-concept="'+i+'"]').getAttribute('aria-pressed');
      const title=await page.locator('#active-heading').textContent();
      const count=await page.locator('#mount > article').count();
      if(active!=='true'||!title.startsWith(String(i).padStart(2,'0'))||count!==1)errors.push(width+' concept '+i+' selection failed');
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth+4);
      if(overflow)errors.push(width+' concept '+i+' document overflow');
      // Collect geometry to expose hidden text/clipped headline risks beyond document scrollWidth.
      const layout=await page.locator('#mount > article').evaluate(article => {
        const area=article.getBoundingClientRect();
        const suspect=[...article.querySelectorAll('h2,h3,p,strong,button')].filter(el => {
          const r=el.getBoundingClientRect();
          if (!r.width || !r.height || getComputedStyle(el).visibility==='hidden') return false;
          return r.left < area.left-5 || r.right > area.right+5;
        }).slice(0,12).map(el => ({tag:el.tagName,text:(el.textContent||'').trim().slice(0,90),x:Math.round(el.getBoundingClientRect().left-area.left),right:Math.round(el.getBoundingClientRect().right-area.left)}));
        return {artboardWidth:Math.round(area.width),overflowCandidates:suspect};
      });
      geometry.push({width,concept:i,...layout});
      await page.screenshot({path:path.join(shots,width+'-concept-'+i+'.png'),fullPage:true});
    }
    // Verify internal controls in addition to concept switching
    await page.locator('[data-concept="1"]').click();
    await page.locator('[data-rec="1"]').click();
    if(!(await page.locator('#record-k').textContent()).includes('INTERNSHIP'))errors.push('Record tab failed');
    if((await page.locator('[data-rec="1"]').getAttribute('aria-pressed'))!=='true')errors.push('Record control state inaccessible');
    await page.locator('[data-concept="2"]').click();
    await page.locator('[data-method="2"]').click();
    if(!(await page.locator('#method-title').textContent()).includes('Record'))errors.push('Method state failed');
    if((await page.locator('[data-method="2"]').getAttribute('aria-pressed'))!=='true')errors.push('Method control state inaccessible');
    await page.locator('[data-concept="3"]').click();
    await page.locator('[data-seq="3"]').click();
    if(!(await page.locator('#seq-role').textContent()).includes('Ramayana'))errors.push('Timeline state failed');
    if((await page.locator('[data-seq="3"]').getAttribute('aria-pressed'))!=='true')errors.push('Timeline control state inaccessible');
    await page.locator('[data-concept="4"]').click();
    await page.locator('[data-index="0"]').click();
    if((await page.locator('[data-index="0"]').getAttribute('aria-expanded'))!=='true')errors.push('Index expansion failed');
    await page.locator('[data-concept="6"]').click();
    await page.locator('[data-desk="3"]').click();
    if(!(await page.locator('#desk-record').textContent()).includes('TRAINING'))errors.push('Desk state failed');
    if((await page.locator('[data-desk="3"]').getAttribute('aria-pressed'))!=='true')errors.push('Desk control state inaccessible');
    await page.close();
  }
  for (const asset of ['assets/aurel-portrait.svg','assets/aurel-graduation.svg']) {
    const result = await browser.newPage();
    try {
      const response=await result.request.get('http://127.0.0.1:'+port+'/'+asset);
      if (response.status()!==200 || !(await response.text()).includes('data:image/webp;base64,')) errors.push('Photo resource not served correctly: '+asset);
    } finally { await result.close(); }
  }
} finally {
  await browser.close();
  server.close();
}
fs.writeFileSync(path.join(shots,'geometry-report.json'),JSON.stringify(geometry,null,2));
const suspicious=geometry.filter(x=>x.overflowCandidates.length);
console.log('Geometry review: '+suspicious.length+' of '+geometry.length+' artboard/viewport combinations have elements potentially outside the artboard. Inspect the JSON and screenshots; this is not automatically a visual failure.');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log('PASS: seven concepts × five responsive widths + five interactive behaviors; screenshots saved.');
