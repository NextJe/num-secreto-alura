let numerosSorteados = [];
let limiteLista = 10;
let numSecreto = randNum();
let tentativas = 0

exibirMensagemInicial();
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numSecreto);
    if(chute == numSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'       
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Você Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{ 
        if(chute > numSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        } 
        tentativas++;
        limparCampo();
    }   
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10' );
}

function randNum(){
    let numeroEscolhido = parseInt(Math.random()*limiteLista + 1);
    let elementosLista = numerosSorteados.length;
    if (elementosLista == limiteLista){
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)){
        return randNum();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numSecreto = randNum();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}