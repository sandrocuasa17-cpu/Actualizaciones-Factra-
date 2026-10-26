const WA='593963615550';
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const money=n=>'$'+(Math.round((n+Number.EPSILON)*100)/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const track=(n,d)=>{try{window.va('event',{name:n,data:d})}catch(_){}};
const waF=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t);
$$('[data-wa]').forEach(a=>a.href=waF('Hola, usé las herramientas gratis de la web y quiero probar Factra para facturar al SRI.'));
document.addEventListener('input',()=>{if(!window._u){window._u=1;track('uso_herramienta',{pagina:location.pathname})}});
document.addEventListener('click',e=>{const a=e.target.closest('[data-wa]');if(a)track('clic_factra_desde_herramienta',{pagina:location.pathname})});
const sh=$('#share');if(sh)sh.addEventListener('click',()=>{track('compartir',{pagina:location.pathname});const t='Mira esta herramienta gratis: '+document.title.split('|')[0].trim()+' '+location.href.split('#')[0];if(navigator.share)navigator.share({text:t}).catch(()=>{});else window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener')});