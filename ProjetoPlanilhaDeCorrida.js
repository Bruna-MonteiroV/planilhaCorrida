let nome = null;
let seuPace = null;

typeof nome;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Planilha de Ritmos');
    exibirTextoNaTela('p', 'Digite seu nome');
}

exibirMensagemInicial();

function verificarNome() {
    nome = document.querySelector('input').value;
    
    if (nome === 'Buna') {
        exibirTextoNaTela('h1', 'Seu pace para a distância de X , é de Y.');
                document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
                    exibirTextoNaTela('p','Este aluno não está cadastrado');
        } 
        }
        limparCampo();

        function limparCampo() {
            nome = document.querySelector('input');
            nome.value = '';
        }

