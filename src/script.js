document.addEventListener('DOMContentLoaded', () => {
    
    // --- Controle do Menu Mobile ---
    const btnMobile = document.getElementById('mobile-menu-btn');
    const menuPanel = document.getElementById('mobile-menu');

    if (btnMobile && menuPanel) {
        btnMobile.addEventListener('click', () => {
            // Alterna a visibilidade do menu
            menuPanel.classList.toggle('hidden');
            
            // Alternar ícone (Bars <-> X)
            const icon = btnMobile.querySelector('i');
            if (menuPanel.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });

        // --- Fechar menu ao clicar em um link (Mobile UX) ---
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
    // Mantido para adicionar sombra ao rolar, mas a cor base agora é definida no HTML
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
});

// A SEÇÃO DE ANIMAÇÃO GSAP/SPLITTEXT FOI REMOVIDA DAQUI