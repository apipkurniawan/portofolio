const galleryImg = document.querySelectorAll('.gallery-img');

galleryImg.forEach((img, i) => {
    img.dataset.aos = 'fade-down';
    img.dataset.aosDelay = i * 200;
    img.dataset.aosDuration = 1000;
});

AOS.init({
    once: true,
    duration: 2000,
});