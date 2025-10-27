console.log('Hello world!');
// COMENTÁRIOS FEITO DO JEITO CERTO AEHOOOOOOOO

// Pelo que eu entendi, é necessário carregar o DOM antes de mexer nos elementos
document.addEventListener('DOMContentLoaded', function () {

    /* ==========================
            MENU HAMBÚRGUER
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

    // Mostra mensagens temporárias
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


/* 
===================================
TEMPLATES COM JAVASCRIPT

Achei meio retardado isso aqui, mas
já que a atividade pede...
==================================
*/

const projetos = [
  {
    titulo: "Programa de Atividades Físicas",
    descricao: "Oferecemos aulas de exercícios físicos adaptados para idosos, promovendo a saúde cardiovascular, força muscular e flexibilidade."
  },
  {
    titulo: "Oficinas de Nutrição",
    descricao: "Realizamos workshops sobre alimentação saudável, ensinando receitas nutritivas e práticas para melhorar a dieta dos idosos."
  },
  {
    titulo: "Grupos de Apoio Emocional",
    descricao: "Criamos grupos de apoio onde os idosos podem compartilhar suas experiências, fortalecer vínculos sociais e receber suporte emocional."
  },
  {
    titulo: "Atividades Culturais e Recreativas",
    descricao: "Organizamos eventos culturais, passeios e atividades recreativas para estimular a mente e promover a socialização entre os participantes."
  },
  {
    titulo: "Palestras e Workshops Educativos",
    descricao: "Oferecemos palestras sobre temas relevantes para o envelhecimento, como saúde mental, prevenção de doenças e direitos dos idosos."
  }
];


const container = document.getElementById("projetos-grid");

// (Promete gerar rsrs) Gera os cards dinamicamente
container.innerHTML = projetos.map(p => `
  <article class="cartao-projeto">
    <h3 class="Cartão-subtitulo">${p.titulo}</h3>
    <p class="Cartão-texto">${p.descricao}</p>
  </article>
`).join('');
