const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// container
ScrollReveal().reveal(".container__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 1500,
});




/*criando menu scrol*/

window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem',window.scrollY > 50 ) /*add classe ao header*/
} )


document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
      // Mostrar o botão após rolar 500px para baixo
      if (window.scrollY > 500) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Efeito de rolagem suave
      });
  });
});




//FUNCAO ALERTA QUANDO ABRIR
function alertaBemvindo() {
  alert("Seja bem-vindo!");
}

// toda vez que carregar vai aparecer
window.onload = alertaBemvindo;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  carrossel++;
  if (carrossel > slides.length) {
      carrossel = 1;
  }
  slides[carrossel - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)
}