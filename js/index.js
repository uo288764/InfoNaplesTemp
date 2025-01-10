const images = [
    'multimedia/images/napoliMainPage.jpg',
    'multimedia/images/napoliMainPage2.jpg',
    'multimedia/images/napoliMainPage3.jpg',
    'multimedia/images/napoliMainPage4.jpg',
];

//show a random image from the array
function showImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('main-image').src = randomImage;
}

// call the function when page charged or recharged
document.addEventListener('DOMContentLoaded', showImage);