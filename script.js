// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 10, density: { enable: true, value_area: 800 } },
        shape: {
            type: 'image',
            image: {
                src: 'canhhoa.png',
                width: 20,
                height: 20
            }
        },
        opacity: { value: 0.8, random: true },
        size: { value: 20, random: true },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 3,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
        modes: {}
    },
    retina_detect: true
});

// AOS Initialization
AOS.init({
    once: true
});

// Countdown Timer
const weddingDate = new Date('2025-04-27T18:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown-timer').innerHTML = '<h4>Ngày cưới đã diễn ra!</h4>';
    }
}, 1000);

// Gallery Functionality
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const isMobileOrTablet = window.innerWidth <= 1024;
    const initialItems = isMobileOrTablet ? 6 : 8;

    // Hide excess items initially based on device
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        if (index >= initialItems) {
            item.classList.add('hidden');
        }
    });

    // Initialize Lightgallery
    const lightGalleryInstance = lightGallery(galleryGrid, {
        selector: '.gallery-item',
        mode: 'lg-fade',
        download: false,
        counter: true,
        thumbnail: true,
        zoom: true,
        fullScreen: true,
        mobileSettings: {
            controls: true,
            showCloseIcon: true
        }
    });

    // Open gallery when clicking "Xem tất cả ảnh"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            console.log('Opening Lightgallery');
            lightGalleryInstance.openGallery(0); // Mở gallery từ ảnh đầu tiên
        });
    } else {
        console.error('loadMoreBtn không tồn tại');
    }

    // Handle window resize to update initialItems dynamically
    window.addEventListener('resize', () => {
        const newIsMobileOrTablet = window.innerWidth <= 1024;
        const newInitialItems = newIsMobileOrTablet ? 6 : 8;
        
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            if (index < newInitialItems) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});