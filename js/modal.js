// Referências ao modal e ao botão de fechar
const modal = document.getElementById("techModal");
const closeModal = document.querySelector(".close");

// Fecha o modal ao clicar no botão "fechar"
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Adiciona evento aos ícones de habilidades para abrir o modal
document.querySelectorAll('.list-inline-item i').forEach(item => {
    item.addEventListener('click', function() {
        const techName = this.getAttribute('data-tech');
        
        // Define o título e descrição do modal
        document.getElementById('modal-title').innerText = techName;
        document.getElementById('modal-description').innerText = `Descrição sobre a experiência com ${techName}`;

        // Exibe o modal
        modal.style.display = "block";
    });
});
