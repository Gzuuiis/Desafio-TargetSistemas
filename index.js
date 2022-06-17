// PRIMEIRA QUESTÃO //

function firstq(){
    var indice = 13;
    var soma = 0;

    for (var k = 0; k < indice; k++) {
        soma = soma + k;
    }

    alert("O valor de soma é: " + soma)
}

// SEGUNDA QUESTÃO //

function secondq(){
    var valor = document.getElementById('secondv').value

    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    var status;

    for (var i = 2; i < valor + 10; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        if(valor == fibonacci[i]){
            alert("O valor " + valor + " pertence a sequência de Fibonacci")
            status = true;
        }
    }
    
    if(status != true){
        alert("O valor " + valor + " não pertence a sequência de Fibonacci")
    }
}

// TERCEIRA QUESTÃO //

/* 

a) 1, 3, 5, 7, *9* => A diferença entre os valores é 2.

b) 2, 4, 8, 16, 32, 64, *128* => Só multiplicar por 2.

c) 0, 1, 4, 9, 16, 25, 36, *49* => São números que possuem raiz quadrada. (EX: 1 x 1 = 1 // 2 x 2 = 4 // 3 x 3 = 9 // 4 x 4 = 16 etc..)

d) 4, 16, 36, 64, => São a sequência dos quadrados dos números pares.

e) 1, 1, 2, 3, 5, 8, 13 => É o ultimo número somado ao penúltimo.

f) 2,10, 12, 16, 17, 18, 19, 200 => Todos os números começam com a letra "D".


*/

// QUARTA QUESTÃO //

/*

 Quando eles se cruzarem a distância será a mesma. Porém, a partir do momento que eles se distanciarem o caminhão ficaria mais perto de Ribeirão devido o carro ter ido a direção oposta.

*/

// QUINTA QUESTãO //

function fifthq(){
    var valor = document.getElementById('fifthv').value;
    
    invertido = '';
    for (var i = valor.length - 1; i >= 0; i--) {
        invertido += valor[i];
    }
    alert(invertido)
}