const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
//const bgImg = document.createElement("img");
//bgImg.src = `img/${chosenImage}`;
//document.body.appendChild(bgImg);

document.body.style.backgroundImage = "url("+`img/${chosenImage}`+")";
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundSize = "1000px"