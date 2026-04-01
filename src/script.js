document.addEventListener('DOMContentLoaded', () => {
    
    // --- Controle do Menu Mobile ---
    const btnMobile = document.getElementById('mobile-menu-btn');
    const menuPanel = document.getElementById('mobile-menu');

    if (btnMobile && menuPanel) {
        btnMobile.addEventListener('click', () => {
            menuPanel.classList.toggle('hidden');
            const icon = btnMobile.querySelector('i');
            if (menuPanel.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });

        const mobileLinks = menuPanel.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuPanel.classList.add('hidden');
                const icon = btnMobile.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- Efeito de Scroll na Navbar ---
    const nav = document.getElementById('main-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-lg');
                nav.classList.remove('shadow-sm');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.add('shadow-sm');
            }
        });
    }

    // --- Controle e Animação do Carrossel de Horários ---
    const carousel = document.getElementById('schedule-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        const scrollAmount = 344; // Largura do card (320px) + gap (24px)
        let autoPlayInterval;

        // Função para mover o carrossel automaticamente
        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 3500); 
        };

        // Função para parar a animação
        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        // Eventos dos botões manuais
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            stopAutoPlay(); 
            startAutoPlay(); 
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            stopAutoPlay(); 
            startAutoPlay();
        });

        // Pausar animação quando o utilizador passa o rato (mouse) por cima do carrossel
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);

        // Inicia a animação ao carregar
        startAutoPlay();
    }
});