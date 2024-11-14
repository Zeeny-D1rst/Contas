function gerarPA() {

    const primeiroTermo = parseInt(document.getElementById("primeiroTermo").value);
    const razao = parseInt(document.getElementById("razao").value);
    
    if (isNaN(primeiroTermo) || isNaN(razao)) {
        alert("Por favor, insira valores válidos para o primeiro termo e a razão.");
        return;
    }
    
    let pa = [];
    for (let i = 0; i < 10; i++) {
        pa.push(primeiroTermo + i * razao);
    }
    
    document.getElementById("resultado").innerHTML = "PA: " + pa.join(", ");
    
    let validacao = "";
    for (let i = 0; i < pa.length; i++) {
        if (pa[i] === primeiroTermo + i * razao) {
            validacao += `Termo ${i+1}: CORRETO<br>`;
        } else {
            validacao += `Termo ${i+1}: ERRADO<br>`;
        }
    }
    
    document.getElementById("validacao").innerHTML = validacao;
}

function Bask()
{
    
};