document.addEventListener("DOMContentLoaded", function () {
  // Seção de navegação com rolagem suave
  const links = document.querySelectorAll('.navbar a');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 10,
          behavior: 'smooth'
        });
      }
    });
  });

  // Seção de alteração dinâmica de título
  const titleElement = document.getElementById("dynamic-title");
  if (titleElement) {
    const titles = ["Fullstack Developer", "Front-end Engineer"];
    let index = 0;

    function changeTitle() {
      index = (index + 1) % titles.length;
      titleElement.textContent = titles[index];
    }

    setInterval(changeTitle, 2000);
  }

  // Seção de fade-in ao entrar na tela
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });

// Selecionando os elementos
const btnMenu = document.getElementById('btn-menu');
const navbar = document.querySelector('.navbar');

// Adicionando o evento de clique no botão de menu
btnMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');  // Alterna a classe 'active' para mostrar ou esconder o menu


let lastScrollTop = 0; // Variável para armazenar a última posição do scroll
const header = document.querySelector('.header');
const menuButton = document.getElementById('btn-menu');


window.addEventListener('scroll', function () {
  // Pega a posição atual do scroll
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  // Verifica se o scroll foi para baixo ou para cima
  if (currentScroll > lastScrollTop) {
    // Se o scroll foi para baixo, esconde o header e fecha o menu
    header.style.top = '-60px'; // Ajuste o valor conforme a altura do seu header
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active'); // Fecha o menu
    }
  } else {
    // Se o scroll foi para cima, mostra o header
    header.style.top = '0';
  }

  // Atualiza a última posição do scroll
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos no scroll
});

menuButton.addEventListener('click', function () {
  navbar.classList.toggle('active'); // Alterna a visibilidade do menu

});

})});
