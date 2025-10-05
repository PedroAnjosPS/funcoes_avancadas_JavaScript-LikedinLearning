// funções de ordem superior

let num = 5;

function dobro(n) {
    return n * 2;
}

function triplo(n) {
    return n * 3;
}

function aplicarFuncao(n, funcao) {
    return funcao(n);
}

console.log(`Resultado do dobro de ${num}: ` + aplicarFuncao(num, dobro));

console.log(`Resultado do triplo de ${num}: ` + aplicarFuncao(num, triplo));