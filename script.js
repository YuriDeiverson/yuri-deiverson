document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os links de navegação com ID correspondentes
  const links = document.querySelectorAll('.navbar a');

  // Adiciona o comportamento de rolagem suave a cada link
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      // Impede o comportamento padrão do link
      event.preventDefault();

      // Pega o ID do link (exemplo: #home, #sobre, #projetos)
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Rola suavemente para o topo do elemento
      window.scrollTo({
        top: targetElement.offsetTop - 10, // Ajusta a posição, se necessário
        behavior: 'smooth' // Aplica o efeito de rolagem suave
      });
    });
  });
});

// Seleciona o elemento com o título dinâmico
const titleElement = document.getElementById("dynamic-title");

// Lista de títulos para alternar
const titles = ["Fullstack Developer", "Front-end Engineer"];

// Índice inicial
let index = 0;

// Função para alternar o título
function changeTitle() {
  // Incrementa o índice, retornando ao início quando atingir o fim do array
  index = (index + 1) % titles.length;

  // Atualiza o texto do título
  titleElement.textContent = titles[index];
}

// Alterna o título a cada 2 segundos (2000 milissegundos)
setInterval(changeTitle, 2000);


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