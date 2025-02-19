const images = document.querySelectorAll('.app-preview');
let currentImage = 0;

function showNextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

// Cambia la imagen cada 3 segundos
setInterval(showNextImage, 3000);

document.addEventListener("DOMContentLoaded", function () {
    // Inicializar Swiper.js con 3 imágenes visibles
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 3, // Mostrar 3 imágenes al mismo tiempo
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Lightbox functionality
    const galleryImages = document.querySelectorAll(".swiper-slide img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    galleryImages.forEach(img => {
        img.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent event from bubbling
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});



