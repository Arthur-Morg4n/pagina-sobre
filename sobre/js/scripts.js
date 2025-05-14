document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
});

function loadContent() {
    const contentDiv = document.getElementById('content');
    
    // Fazer uma requisição AJAX para carregar um conteúdo externo
    fetch('content.html')  // Arquivo externo que contém o conteúdo
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = `<div class="fade-in">${data}</div>`;
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}
