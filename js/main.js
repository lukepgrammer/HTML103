console.log('Hello world!');
// COMENTÁRIOS FEITO DO JEITO CERTO AEHOOOOOOOO

// Espera o DOM carregar antes de manipular elementos
document.addEventListener('DOMContentLoaded', function () {

    /* ==========================
       MENU HAMBÚRGUER - MOBILE
    ========================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = navLinks.querySelectorAll('a');

    // Abre o menu ao clicar no botão
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');

        const isExpanded = navLinks.classList.contains('active'); // corrigido typo
        this.setAttribute('aria-expanded', isExpanded);
        this.setAttribute('aria-label', isExpanded ? 'Fecha menu' : 'Abrir menu');
    });

    // Fecha o menu ao clicar em um link
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        }
    });

    /* ==========================
       FORMULÁRIO DE VOLUNTÁRIOS
    ========================== */
    const btnCadastrar = document.getElementById("btnCadastrar");
    const btnLimpar = document.getElementById("btnLimpar");
    const form = document.getElementById("formCadastro");
    const messageBox = document.getElementById("messagebox");

    // Função para mostrar mensagens temporárias
    function mostrarMensagem(message, type) {
        messageBox.className = "";
        messageBox.classList.add("show", type);
        messageBox.innerHTML = `
            <span class="icon">${type === "success" ? "✅" : "❌"}</span> ${message}
        `;

        setTimeout(() => {
            messageBox.classList.remove("show");
        }, 3000);
    }

    btnCadastrar.addEventListener("click", function (e) {
        e.preventDefault(); // se eu alterar o tipo pra submit -> button, o formulário quebra por algum motivo
        mostrarMensagem("Voluntário cadastrado!", "success");
        form.reset();
    });

    btnLimpar.addEventListener("click", function (e) {
        e.preventDefault();
        form.reset();
        mostrarMensagem("Campos apagados!", "error");
    });

});
