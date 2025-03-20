document.addEventListener("DOMContentLoaded", function() {
  // Adicionando interatividade com uma simples animação
  const filmes = document.querySelectorAll('.filme');

  filmes.forEach(filme => {
    filme.addEventListener('mouseover', () => {
      filme.style.transform = "scale(1.05)";
    });

    filme.addEventListener('mouseout', () => {
      filme.style.transform = "scale(1)";
    });
  });
});
