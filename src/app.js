// Shared navigation, theme preference, and legacy page interactions.
const navButton=document.querySelector('.toggle_btn'),dropdown=document.querySelector('.dropdown_menu');
if(navButton&&dropdown){navButton.addEventListener('click',()=>{dropdown.classList.toggle('open');navButton.setAttribute('aria-expanded',String(dropdown.classList.contains('open')));const icon=navButton.querySelector('i');if(icon)icon.className=dropdown.classList.contains('open')?'fa-solid fa-xmark':'fa-solid fa-bars';});}
if(!document.querySelector('link[data-portfolio-theme]')){const link=document.createElement('link');link.rel='stylesheet';link.href='src/revamp.css?v=1';link.dataset.portfolioTheme='true';document.head.appendChild(link);}
const saved=(()=>{try{return localStorage.getItem('portfolio-theme')}catch(e){return null}})();
const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(theme){document.body.dataset.theme=theme;const b=document.querySelector('.theme-toggle');if(b){b.innerHTML=theme==='dark'?'<span aria-hidden="true">☼</span><span>Light</span>':'<span aria-hidden="true">☾</span><span>Dark</span>';b.setAttribute('aria-label',theme==='dark'?'Switch to warm light theme':'Switch to dark theme');b.setAttribute('aria-pressed',String(theme==='dark'));}try{localStorage.setItem('portfolio-theme',theme)}catch(e){}}
if(saved==='dark'||saved==='light')setTheme(saved);else setTheme(prefersDark?'dark':'light');
const nav=document.querySelector('#nav-bar nav');
if(nav&&!nav.querySelector('.theme-toggle')){const b=document.createElement('button');b.type='button';b.className='theme-toggle';b.addEventListener('click',()=>setTheme(document.body.dataset.theme==='dark'?'light':'dark'));const mobile=nav.querySelector('.toggle_btn');nav.insertBefore(b,mobile||null);setTheme(document.body.dataset.theme||'light');}
document.querySelectorAll('.section-header').forEach(h=>h.addEventListener('click',function(){this.parentNode.classList.toggle('active')}));
const modal=document.getElementById('myModal'),modalImg=document.getElementById('img01'),caption=document.getElementById('caption'),close=document.querySelector('.close');
if(modal&&modalImg){document.querySelectorAll('[id^="myImg"]').forEach(img=>{img.style.cursor='zoom-in';img.addEventListener('click',()=>{modal.style.display='block';modalImg.src=img.src;if(caption)caption.textContent=img.alt})});if(close)close.onclick=()=>modal.style.display='none';modal.addEventListener('click',e=>{if(e.target===modal)modal.style.display='none'})}
