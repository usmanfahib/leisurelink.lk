let i=0;
const slides=document.querySelectorAll('.hero img');
function run(){slides.forEach(s=>s.classList.remove('active'));
slides[i].classList.add('active');
i=(i+1)%slides.length;}
run(); setInterval(run,5000);
