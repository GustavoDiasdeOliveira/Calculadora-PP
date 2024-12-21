const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const body = document.body;  // Selecione o body para alterar a cor de fundo
    if (mode.classList.contains('bi-moon-fill')) {
        // Troca para o modo claro
        mode.classList.remove('bi-moon-fill');
        mode.classList.add('bi-sun-fill');
        body.classList.add('dark');  // Adiciona a classe dark ao body
    } else {
        // Troca para o modo escuro
        mode.classList.add('bi-moon-fill');
        mode.classList.remove('bi-sun-fill');
        body.classList.remove('dark');  // Remove a classe dark ao body
    }
});
