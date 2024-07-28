const imgs = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"];
const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = `url(img/${chosenImage})`;

document.body.style.backgroundImage = bgImage;