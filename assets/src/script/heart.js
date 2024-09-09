const bgHeart = document.querySelector(".bg_heart");
const cuddleButtons = document.querySelectorAll(".cuddle");
const cuteButton = document.querySelector(".cute");

cuddleButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const { clientX: x, clientY: y } = event;
    explodeHearts(x, y);
  })
);

cuteButton.addEventListener("click", () => {
  loveAppear();
});

function loveAppear() {
  const loveInterval_2 = setInterval(() => {
    const randomInRange = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const createHeart = (size, left, bgColor, duration) => {
      const red = Math.min(bgColor + 30, 255); // Maximized red for contrast
      const green = Math.min(bgColor + 20, 255); // High green for stronger yellow
      const blue = 0; // Minimized blue to create a pure yellow

      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.width = `${size}vw`;
      heart.style.height = `${size}vw`;
      heart.style.left = `${left}%`;
      heart.style.background = `rgba(${red}, ${green}, ${blue}, 1)`;
      heart.style.animation = `love ${duration}s ease`;
      return heart;
    };

    const rSize = randomInRange(2, 4);
    const rLeft = randomInRange(1, 100);
    const rBg = randomInRange(200, 255);
    const rTime = randomInRange(5, 10);

    bgHeart.appendChild(createHeart(rSize, rLeft, rBg, rTime));
    bgHeart.appendChild(createHeart(rSize, rLeft, rBg + 25, rTime + 5));

    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart) => {
      const top = parseFloat(getComputedStyle(heart).top);
      const width = parseFloat(getComputedStyle(heart).width);
      if (top <= -100 || width >= 150) {
        heart.remove();
      }
    });
  }, 1);
  setTimeout(() => {
    clearInterval(loveInterval_2);
  }, 1000);
}

// Function to create hearts and animate them
function explodeHearts(x, y) {
  const numberOfHearts = 20; // Number of hearts in the explosion
  for (let i = 0; i < numberOfHearts; i++) {
    // Create a heart element
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.classList.add("heart_tiny");

    // Set random offsets for the heart explosion
    const xOffset = (Math.random() - 0.5) * 2000; // Random x direction
    const yOffset = (Math.random() - 0.5) * 2000; // Random y direction
    heart.style.setProperty("--x-offset", `${xOffset}px`);
    heart.style.setProperty("--y-offset", `${yOffset}px`);

    // Set the position of the heart at the click location
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Append the heart to the explosion container
    bgHeart.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
      heart.remove();
    }, 1500); // Match the duration of the animations
  }
}
