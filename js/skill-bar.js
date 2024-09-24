document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Função para ativar a animação
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const skillValue = bar.getAttribute('data-skill') + '%'; // Obtém o valor do atributo data-skill
            bar.style.width = skillValue; // Aplica a largura da barra
        });
    }

    // Adiciona um pequeno atraso para garantir que a animação seja visível
    setTimeout(animateProgressBars, 100); // 100ms de atraso para garantir a animação suave
});
