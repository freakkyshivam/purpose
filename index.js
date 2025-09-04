let btn = document.querySelector(".btn");
let heading = document.querySelector(".heading");

btn.addEventListener("click", () => {
  const cele = document.querySelector(".cele");
  const loadingDots = document.querySelector(".loading-dots");
  const checkmark = document.querySelector(".checkmark");
  const magicOverlay = document.querySelector(".magic-overlay");

  btn.disabled = true;
  btn.style.opacity = "0.7";
  loadingDots.classList.add("show");

  magicOverlay.classList.add("active");

  setTimeout(() => {
    magicOverlay.classList.remove("active");
    loadingDots.classList.remove("show");
    checkmark.classList.add("show");

    setTimeout(() => {
      checkmark.classList.remove("show");
      heading.innerText = "I Love You 💕";
      cele.textContent =
        "🎉 Congratulations! Your magic moment has arrived! 🌟";
      cele.classList.add("show");

      const audio = new Audio("./Mann Mera Unplugged-(Mr-Jat.in).mp3");
      audio.play();

      var duration = 2 * 1000;
      var end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });

        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }, 600);

    (async () => {
      await loadFireworksPreset(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "fireworks",
        },
      });
    })();
  }, 2000);
});
