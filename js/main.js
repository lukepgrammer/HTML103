console.log('Hello world!');
// FINALMENTE COMENTÁRIOS FEITO DO JEITO CERTO!!11

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Desce o menu ao clicar
    menuToggle.addEventListener('click',function() {
        navLinks.classList.toggle('active');

        const isExpended = navLinks.classList.contains('active');
        this.setAttribute('aria-expanded', isExpended);
        this.setAttribute('aria-label', isExpended ? 'Fecha menu' : 'Abrir menu'); // operador ternário eh nois
    });

    // fechar o menu ao clicar numa das páginas 
    const navItens = document.querySelectorAll('.nav-links a');
    navItens.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active'); // fecha o menu
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });

    });
