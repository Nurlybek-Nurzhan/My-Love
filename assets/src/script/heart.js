const cuddleButtons = document.querySelectorAll(".cuddle");

cuddleButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const loveInterval_2 = setInterval(() => {
      const randomInRange = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
      const createHeart = (size, left, bgColor, duration) => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.width = `${size}vw`;
        heart.style.height = `${size}vw`;
        heart.style.left = `${left}%`;
        heart.style.background = `rgba(255, 255, ${bgColor - 125}, 1)`;
        heart.style.animation = `love ${duration}s ease`;
        return heart;
      };

      const bgHeart = document.querySelector(".bg_heart");
      const rSize = randomInRange(2, 4);
      const rLeft = randomInRange(1, 100);
      const rBg = randomInRange(100, 125);
      const rTime = randomInRange(5, 10);

      bgHeart.appendChild(createHeart(rSize, rLeft, rBg, rTime));
      bgHeart.appendChild(
        createHeart(rSize, rLeft, rBg + 25, rTime + 5)
      );

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
  })
);
