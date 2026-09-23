const screens = [...document.querySelectorAll(".screen")];
const bar = document.getElementById("bar");
let current = 0;

function show(i){
  current = i;
  screens.forEach((s,n)=>s.classList.toggle("active",n===i));
  bar.style.width = `${((i+1)/screens.length)*100}%`;
  window.scrollTo(0,0);
}

document.querySelectorAll(".next").forEach(btn=>{
  btn.addEventListener("click",()=>show(Math.min(current+1,screens.length-1)));
});

document.querySelector(".forgive").addEventListener("click",()=>{
  show(4);
  makeHearts();
});

document.querySelector(".restart").addEventListener("click",()=>show(0));

const audio = document.getElementById("audio");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async ()=>{
  if(audio.paused){
    try{ await audio.play(); musicBtn.textContent="❚❚"; }
    catch(e){ alert("Add your MP3 at assets/song.mp3 first."); }
  }else{
    audio.pause(); musicBtn.textContent="▶";
  }
});

function makeHearts(){
  const box=document.querySelector(".confetti");
  box.innerHTML="";
  for(let i=0;i<34;i++){
    const h=document.createElement("span");
    h.textContent=["♥","♡","✦","·"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"%";
    h.style.animationDelay=Math.random()*1.4+"s";
    h.style.fontSize=(10+Math.random()*22)+"px";
    box.appendChild(h);
  }
}
