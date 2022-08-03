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

    setResultado(`Seu IMC é ${imc} (${getNivelIMC(imc)})`, true);

});

function getImc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

function getNivelIMC(imc) {
    const listaNivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    let i = -1;
    if (imc >= 40) {
        i = 5;
    } else if (imc >= 35) {
        i = 4;
    } else if (imc >= 30) {
        i = 3;
    } else if (imc >= 25) {
        i = 2;
    } else if (imc >= 18.5) {
        i = 1;
    } else if (imc < 18.5) {
        i = 0;
    }

    return listaNivel[i];
}


function criarP() {
    const p = document.createElement("p");
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criarP();
    if (isValid)
        p.classList.add('paragrafo-resultado-true');
    else
        p.classList.add('paragrafo-resultado-false');
    p.innerHTML = msg;
    resultado.appendChild(p);
}