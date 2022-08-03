const form = document.querySelector("#form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }


    const imc = getImc(peso, altura);

    setResultado(imc, true);

});

function getImc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}




function criarP() {
    const p = document.createElement("p");
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criarP();
    p.innerHTML = msg;
    p.classList.add('paragrafo-resultado');
    resultado.appendChild(p);
}