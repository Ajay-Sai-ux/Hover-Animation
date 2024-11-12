const images = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    "./images/6.png",
    "./images/7.png",
    "./images/8.png",
    "./images/9.png",
    "./images/10.png",
    "./images/11.png",
    "./images/12.png",
]

const  imageGrid = document.querySelector('.image-grid');
const gridCount = 200;

for (let i = 0; i < gridCount; i++) {
    const img = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * images.length);
        img.src = images[randomIndex];
        imageGrid.appendChild(img);
}