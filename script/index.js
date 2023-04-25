function insert(num) {
    let numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num
};

function limparTudo() {
    document.getElementById('visor').innerHTML = "";
};

function limparUm() {
    let numerosNoVisor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numerosNoVisor.substring(0, numerosNoVisor.length -1)
};

function calcular() {
    let resultado = document.getElementById('visor').innerHTML;
    if (visor) {
        document.getElementById('visor').innerHTML = eval(resultado);
    }
     else {
        document.getElementById('visor').innerHTML = "0";
    }
};