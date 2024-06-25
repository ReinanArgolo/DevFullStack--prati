const images = document.querySelectorAll('.carrossel-images img')

let slideIndex = 0;

function next() {
    slideIndex = (slideIndex + 1) % images.length;
    for(let i = 0; i < images.length; i++) {
        let imgIndex = (slideIndex + i) % images.length+1;
        images[i].src = './assets/images/slider/img' + imgIndex + '.png';
    }
}

function back() {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    for(let i = 0; i < images.length; i++) {
        let imgIndex = (slideIndex + i) % images.length + 1;
        images[i].src = './assets/images/slider/img' + imgIndex + '.png';
    }
}