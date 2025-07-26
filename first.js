function scrollToSection(id, event) {
  if (event) event.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


document.querySelectorAll(".effectiveness").forEach(circle => {
  const span = circle.querySelector("span");
  const value = parseInt(span.getAttribute("value"), 10) || 0;
  const targetDeg = value * 3.6;
  const duration = 4000; // 5 seconds
  const fps = 60; // approximate animation frame rate
  const totalFrames = (duration / 1000) * fps;
  const increment = targetDeg / totalFrames;

  let currentDeg = 0;

  const animate = () => {
    currentDeg += increment;

    if (currentDeg >= targetDeg) {
      currentDeg = 0; // reset
    }

    circle.style.background = `conic-gradient(#4caf50 ${currentDeg}deg, rgb(7, 40, 40) 0deg)`;

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
});



