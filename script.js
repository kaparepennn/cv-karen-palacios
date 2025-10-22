// Animación al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Descargar el CV como PDF (usa la función de impresión del navegador)
document.getElementById("downloadCV").addEventListener("click", () => {
  window.print();
});
