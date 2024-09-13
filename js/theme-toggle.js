/*
O código inicializa quando o DOM está pronto e aplica o tema armazenado no localStorage.
Ele utiliza um botão de alternância para ativar ou desativar o tema escuro (modo claro/escuro) e 
salva essa preferência no navegador para ser lembrada entre visitas.
*/

// Este código aguarda que o DOM seja totalmente carregado antes de executar qualquer ação.
document.addEventListener('DOMContentLoaded', function () {

    // Obtém o botão ou elemento de alternância de tema pelo ID 'themeToggle'.
    const themeToggle = document.getElementById('themeToggle');

    // Verifica se o tema atual está armazenado no localStorage do navegador.
    const currentTheme = localStorage.getItem('theme');

    // Se houver um tema armazenado (dark-mode ou light-mode), ele é aplicado ao corpo da página.
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    // Adiciona um evento de clique ao botão de alternância de tema.
    themeToggle.addEventListener('click', function () {

        // Verifica se o corpo do documento já tem a classe 'dark-mode'.
        if (document.body.classList.contains('dark-mode')) {
            // Se estiver no modo escuro, remove a classe 'dark-mode' e armazena 'light-mode' no localStorage.
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            // Caso contrário, adiciona a classe 'dark-mode' e armazena 'dark-mode' no localStorage.
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});

