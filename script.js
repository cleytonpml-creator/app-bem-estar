document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\n\nDetalhes:\nE-mail: ${email}\nMensagem: ${mensagem}`);

    document.getElementById('contato-form').reset();
});
