
let btn = document.querySelector(".btn");
let heading = document.querySelector(".heading")
let cele = document.querySelector(".cele")
btn.addEventListener('click', ()=>{
    heading.innerText = 'I Love You 💕'

    setTimeout(() => {
            cele.innerText = "Now celebrate...... 👻"
    }, 4000);

    var duration = 2 * 1000;
var end = Date.now() + duration;

(function frame() {
   
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
 
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

   
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());


(async () => {
  await loadFireworksPreset(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "fireworks",
    },
  });
})();
   
})

 