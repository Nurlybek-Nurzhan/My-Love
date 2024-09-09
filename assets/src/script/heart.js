const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const loveInterval_1 = setInterval(() => {
  for (let i = 0; i < 60; i++) {
    const size = getRandomNumber(2, 4);
    const x = getRandomNumber(0, window.innerWidth - 120);
    const y = getRandomNumber(0, window.innerHeight - 120);

    const heart = document.createElement("i");
    heart.className = "bx bx-heart";

    heart.style.position = "fixed";
    heart.style.fontSize = `${size}vw`;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.zIndex = "-99999";

    heart.style.animation = `glow 5s ease-in-out 0s 5 normal none, heart 1s ease-in-out 0s infinite normal none`;
    document.body.appendChild(heart);
  }
  const hearts = document.querySelectorAll(".bx-heart");
  hearts.forEach((heart) => {
    setTimeout(() => {
      heart.remove();
    }, 5000);
  });
}, 5000);

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
        heart.style.background = `rgba(255, ${bgColor - 25}, ${bgColor}, 1)`;
        heart.style.animation = `love ${duration}s ease`;
        return heart;
      };

      const bgHeart = document.querySelector(".bg_heart");
      const rNum = randomInRange(1, 40);
      const rSize = randomInRange(2, 4);
      const rLeft = randomInRange(1, 100);
      const rBg = randomInRange(100, 125);
      const rTime = randomInRange(5, 10);

      bgHeart.appendChild(createHeart(rSize, rLeft, rBg, rTime));
      bgHeart.appendChild(
        createHeart(rSize, rLeft + rNum, rBg + 25, rTime + 5)
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
