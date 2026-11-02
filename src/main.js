const proyectos = [
    {
        titulo: "OSM Taller Mecánico Industrial",
        descripcion: "Sistema de escritorio en C# / WPF para administrar órdenes de un taller mecánico.",
        link: "https://github.com/daySosa/TallerMecanicoIndustrial"
    },
    {
        titulo: "Patty's Store",
        descripcion: "Sitio web con catálogo de productos y carrito de compras, hecho con HTML, CSS y JS.",
        link: "https://github.com/daySosa/Proyecto_Final__PW1"
    },
    {
        titulo: "Portafolio",
        descripcion: "Esta misma página, hecha desde cero para practicar HTML, CSS y JavaScript.",
        link: "https://github.com/daySosa/Portafolio-"
    }
];

const projectsGrid = document.getElementById("projectsGrid");

projectsGrid.innerHTML = proyectos.map(p => `
  <div class="project-card">
    <h3>${p.titulo}</h3>
    <p>${p.descripcion}</p>
    <a href="${p.link}" target="_blank" rel="noopener">Ver proyecto</a>
  </div>
`).join("");

const frases = [
    "Estudiante de Ingeniería en Ciencias de la Computación",
    "Aprendiendo C# y WPF",
    "Aprendiendo desarrollo web"
];

const typedText = document.getElementById("typedText");
let fraseIndex = 0;
let charIndex = 0;
let borrando = false;

function escribir() {
    const fraseActual = frases[fraseIndex];

    if (!borrando) {
        typedText.textContent = fraseActual.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === fraseActual.length) {
            borrando = true;
            setTimeout(escribir, 1600);
            return;
        }
    } else {
        typedText.textContent = fraseActual.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            borrando = false;
            fraseIndex = (fraseIndex + 1) % frases.length;
        }
    }
    setTimeout(escribir, borrando ? 35 : 70);
}

escribir();

const navBurger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");

navBurger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

const profileImg = document.getElementById("profileImg");
const fallback = document.getElementById("fallback");

profileImg.addEventListener("error", () => {
    profileImg.style.display = "none";
    fallback.style.display = "flex";
});

const secciones = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("show");
            observer.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

secciones.forEach(sec => observer.observe(sec));

document.getElementById("year").textContent = new Date().getFullYear();