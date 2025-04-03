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

document.addEventListener('DOMContentLoaded', function() {
    const familyPhotoLink = document.querySelector('.family-photo-link');
    lightGallery(familyPhotoLink, {
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: false,
        download: false, // Tùy chọn: tắt nút tải xuống
    });
});


// Music Control
const music = document.getElementById('backgroundMusic');
const toggleBtn = document.getElementById('musicToggleBtn');
const audioNotification = document.getElementById('audioNotification');
const overlay = document.getElementById('overlay');
const playMusicBtn = document.getElementById('playMusicBtn');
const closeNotification = document.getElementById('closeNotification');

let isPlaying = false;

// Thử tự động phát nhạc khi trang tải
const playMusic = () => {
    music.play()
        .then(() => {
            isPlaying = true;
            toggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        })
        .catch((error) => {
            console.log("Autoplay bị chặn: ", error);
            isPlaying = false;
            toggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            audioNotification.style.display = 'block'; // Hiển thị thông báo
            overlay.style.display = 'block'; // Hiển thị overlay mờ
        });
};

// Chạy khi trang tải
playMusic();

// Đóng thông báo
closeNotification.addEventListener('click', () => {
    audioNotification.style.display = 'none';
    overlay.style.display = 'none';
    isPlaying = false;
    toggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
 
});
// Nút "Có" - Phát nhạc ngay
playMusicBtn.addEventListener('click', () => {
    music.play();
    toggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    isPlaying = true;
    audioNotification.style.display = 'none';
    overlay.style.display = 'none';
});
// Music Control
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('musicToggleBtn');


    // Phát nhạc mặc định khi trang tải
    audio.play().catch(error => {
        console.log('Autoplay bị chặn:', error);
    });

    // Xử lý sự kiện bật/tắt nhạc
    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            toggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            toggleBtn.classList.add('muted');
        } else {
            audio.play();
            toggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            toggleBtn.classList.remove('muted');
        }
        isPlaying = !isPlaying;
    });
});