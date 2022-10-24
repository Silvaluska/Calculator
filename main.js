var list_numeros = document.querySelectorAll('.numeros');
var operadores = document.querySelectorAll('.operadores');
var funcoes = document.querySelectorAll('.funcoes');
var numero1 = '';
var numero2 = '';
var operador;
var resposta = document.querySelector('.resposta');
for (var i = 0; i < 10 ; i++) {
    const id = i;
    list_numeros[i].onclick = function() {
        if (operador == null) {
            numero1 += list_numeros[id].innerHTML;
            resposta.innerHTML = numero1
        }
        if (operador != null) {
            numero2 += list_numeros[id].innerHTML;
            resposta.innerHTML = numero1 + ' ' + operador + ' ' + numero2
        }
    }
}
for (var i = 0; i < 4 ; i++) {
    const id = i;
    operadores[i].onclick = function() {
        operador = operadores[id].innerHTML;
        resposta.innerHTML = numero1 + ' ' + operador
    }
}
for (var i = 0; i < 2 ; i++) {
    const id = i;
    funcoes[i].onclick = function() {
        if (funcoes[id].innerHTML == '=') {
            if (operador == '+') {
                resposta.innerHTML = parseInt(numero1) + parseInt(numero2) 
            }
            else if (operador == '-') {
                resposta.innerHTML = parseInt(numero1) - parseInt(numero2)
            }
            else if (operador == 'x') {
                resposta.innerHTML = parseInt(numero1) * parseInt(numero2)
            }
            else if (operador == '/') {
                resposta.innerHTML = parseInt(numero1) / parseInt(numero2)
            }
            console.log(resposta)
        }
        if (funcoes[id].innerHTML == 'c') {
            numero1 = '';
            numero2 = '';
            operador = null;
            resposta.innerHTML = ' '
        }
    }
}