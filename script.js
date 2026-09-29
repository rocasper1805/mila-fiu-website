const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.08});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
// Gentle parallax for Milo stickers on desktop
if(window.matchMedia("(pointer:fine)").matches){window.addEventListener("mousemove",e=>{const x=(e.clientX/window.innerWidth-.5)*8;const y=(e.clientY/window.innerHeight-.5)*8;document.querySelectorAll(".milo-float").forEach((el,i)=>{const d=(i%2?1:-1);el.style.marginLeft=`${x*d}px`;el.style.marginTop=`${y*d}px`;});});}
