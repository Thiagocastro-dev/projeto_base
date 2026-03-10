document.addEventListener('DOMContentLoaded', () => {
    
    // --- Controle do Menu Mobile ---
    const btnMobile = document.getElementById('mobile-menu-btn');
    const menuPanel = document.getElementById('mobile-menu');

    if (btnMobile && menuPanel) {
        btnMobile.addEventListener('click', () => {
            // Alterna a visibilidade do menu (toggle class 'hidden')
            menuPanel.classList.toggle('hidden');
            
            // Opcional: Alternar ícone (Bars <-> X)
            const icon = btnMobile.querySelector('i');
            if (menuPanel.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
    }

    // --- Fechar menu ao clicar em um link (Mobile UX) ---
    const mobileLinks = menuPanel.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuPanel.classList.add('hidden');
        });
    });

    // --- Efeito de Scroll na Navbar ---
    const nav = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('shadow-lg', 'bg-white/95');
            nav.classList.remove('bg-transparent'); // Caso queira iniciar transparente
        } else {
            nav.classList.remove('shadow-lg');
            // nav.classList.add('bg-transparent'); // Se quiser reverter
        }

// --- Animação de Letras (GSAP + SplitText) ---
// O $(document).ready garante que o jQuery espera o HTML carregar completamente
$(document).ready(function() {
    
    var $textElements = $(".split");
    
    // Só executa a animação se a classe .split existir na página e o SplitText estiver carregado
    if($textElements.length > 0 && typeof SplitText !== 'undefined') {
        
        var split = new SplitText($textElements, {type: "chars, words"}); 

        function random(min, max){
            return (Math.random() * (max - min)) + min;
        }

        $(split.chars).each(function(i){
            TweenMax.from($(this), 2.5, {
                opacity: 0,
                x: random(-500, 500),
                y: random(-500, 500),
                z: random(-500, 500),
                scale: .1,
                delay: i * .02,
                yoyo: true,
                repeat: -1,
                repeatDelay: 10
            });
        });
    }
});
    

        




    });

});