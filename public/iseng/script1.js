/* ─── Mobile Navbar ────────────────────────────────── */
const navLinks        = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton  = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton?.addEventListener('click', () => {
    document.body.classList.add('show-mobile-menu');
});
menuCloseButton?.addEventListener('click', () => menuOpenButton?.click());
navLinks.forEach(link => {
    link.addEventListener('click', () => menuOpenButton?.click());
});

/* ─── Inisialisasi Swiper Independen per Section ─────── */
const swipers = {};

function initSectionSwipers() {
    const sections = document.querySelectorAll('.testimonials-section');
    sections.forEach(section => {
        const wrapper = section.querySelector('.slider-wrapper');
        if (!wrapper) return;

        const prevBtn = section.querySelector('.swiper-button-prev');
        const nextBtn = section.querySelector('.swiper-button-next');
        const pagEl   = section.querySelector('.swiper-pagination');

        const s = new Swiper(wrapper, {
            loop: false, // Non-loop agar slide tidak pecah/hilang saat difilter
            grabCursor: true,
            spaceBetween: 25,
            speed: 400,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            watchOverflow: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagEl,
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                0:    { slidesPerView: 1, spaceBetween: 15 },
                641:  { slidesPerView: 2, spaceBetween: 20 },
                992:  { slidesPerView: 3, spaceBetween: 25 },
            }
        });

        swipers[section.id] = s;
    });
}

/* ─── Game Selection (Pilih Game) ───────────────────── */
function setupGameSelector() {
    const gameButtons = document.querySelectorAll('.game-btn');
    const sections    = document.querySelectorAll('.testimonials-section');

    gameButtons.forEach(button => {
        button.addEventListener('click', function () {
            const gameId = this.getAttribute('data-game');

            gameButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            sections.forEach(sec => {
                if (sec.id === gameId) {
                    sec.style.display = 'block';
                    sec.classList.add('active-game');

                    // Update Swiper pada section yang baru dibuka
                    setTimeout(() => {
                        if (swipers[gameId]) {
                            swipers[gameId].update();
                            swipers[gameId].slideTo(0, 0);
                        }
                    }, 60);

                    // Khusus ZZZ: pastikan background default 'all' aktif jika belum ada
                    if (gameId === 'zenles') {
                        const allBg = sec.querySelector('.background-image[data-kelompok="all"]');
                        if (allBg && !sec.querySelector('.background-image.active')) {
                            allBg.style.display = 'block';
                            allBg.classList.add('active');
                        }
                    }
                } else {
                    sec.style.display = 'none';
                    sec.classList.remove('active-game');
                }
            });
        });
    });
}

/* ─── Generic Filter Helper (Scoped per Section) ─────── */
function setupScopedFilter(sectionId, btnSelector, attrName) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const buttons = section.querySelectorAll(btnSelector);
    const slides  = section.querySelectorAll('.testimonial');

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterVal = (this.getAttribute(attrName) || '').toLowerCase().trim();

            slides.forEach(slide => {
                const slideVal = (slide.getAttribute(attrName) || '').toLowerCase().trim();
                if (filterVal === 'all' || slideVal === filterVal) {
                    slide.style.display = '';
                } else {
                    slide.style.display = 'none';
                }
            });

            // Update Swiper dan kembali ke slide pertama
            if (swipers[sectionId]) {
                swipers[sectionId].update();
                swipers[sectionId].slideTo(0, 0);
            }
        });
    });
}

/* ─── Filter Khusus Zenless Zone Zero (ZZZ) ─────────── */
function setupZZZFilter() {
    const section = document.getElementById('zenles');
    if (!section) return;

    const buttons  = section.querySelectorAll('.kelompok-btn');
    const slides   = section.querySelectorAll('.testimonial');
    const bgImages = section.querySelectorAll('.background-image');

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const kelompokVal = (this.getAttribute('data-kelompok') || '').toLowerCase().trim();

            // 1. Update background image ZZZ dengan transisi crossfade mulus
            bgImages.forEach(img => {
                const imgVal = (img.getAttribute('data-kelompok') || '').toLowerCase().trim();
                const match = (kelompokVal === 'all' ? imgVal === 'all' : imgVal === kelompokVal);
                if (match) {
                    img.style.display = 'block';
                    requestAnimationFrame(() => {
                        img.classList.add('active');
                    });
                } else {
                    img.classList.remove('active');
                    setTimeout(() => {
                        if (!img.classList.contains('active')) {
                            img.style.display = 'none';
                        }
                    }, 550);
                }
            });

            // 2. Filter kartu karakter ZZZ
            slides.forEach(slide => {
                const slideVal = (slide.getAttribute('data-kelompok') || '').toLowerCase().trim();
                if (kelompokVal === 'all' || slideVal === kelompokVal) {
                    slide.style.display = '';
                } else {
                    slide.style.display = 'none';
                }
            });

            // 3. Update Swiper ZZZ
            if (swipers['zenles']) {
                swipers['zenles'].update();
                swipers['zenles'].slideTo(0, 0);
            }
        });
    });
}

/* ─── Gallery Filter ─────────────────────────────────── */
function setupGalleryFilter() {
    const eventGameFilter = document.querySelector('#event-game-filter');
    const eventGalleries  = document.querySelectorAll('.event-gallery');

    eventGameFilter?.addEventListener('change', () => {
        eventGalleries.forEach(gallery => {
            gallery.hidden = gallery.getAttribute('data-event') !== eventGameFilter.value;
        });
    });
}

/* ─── Init Saat DOM Siap ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initSectionSwipers();
    setupGameSelector();

    // Setup filter scoped untuk masing-masing game
    setupScopedFilter('genshin',     '.region-btn',   'data-region');
    setupZZZFilter();
    setupScopedFilter('bluearchive', '.sekolah-btn',  'data-sekolah');
    setupScopedFilter('honkai',      '.faksi-btn',    'data-faksi');

    setupGalleryFilter();

    // Tandai tombol 'All' sebagai active default
    document.querySelectorAll('.region-btn[data-region="all"], .kelompok-btn[data-kelompok="all"], .sekolah-btn[data-sekolah="all"], .faksi-btn[data-faksi="all"]').forEach(b => {
        b.classList.add('active');
    });

    // Buka game pertama secara default
    const anyActive = Array.from(document.querySelectorAll('.testimonials-section')).some(s => s.style.display === 'block');
    if (!anyActive) {
        const firstGameBtn = document.querySelector('.game-btn');
        firstGameBtn?.click();
    }
});
