// function soma(a, b) {
//     console.log(a + b);

//     // return undefined; // Retorna undefined por padrão
// } 

// const resultado = soma(5, 10);

// console.log(resultado);

// ** Retornando um valor simples **

// function soma(a, b) {
//     console.log(a + b);

//     return a + b;
// }

// const resultado = soma(5, 10);

// console.log(resultado);


// ** Retornando um arrays **

// function criarPessoa(nome, idade) {
//     return [nome, idade];
// }

// const [nome, idade] = criarPessoa('Ariel', 29);

// console.log("Nome: " + nome, "\nIdade: " + idade);


// ** Retornando um objeto **

// function criarPessoa(nome, idade) {
//     return {
//         nome, 
//         idade
//     };

// }

// const {nome, idade} = criarPessoa('Pedro', 19);

// console.log(nome, idade);
 

// ** Retornando uma função **

function criarPessoa(nome, idade) {
    function myFunc() {
        return `Nome: ${nome} \nIdade: ${idade}`;
    }

    return myFunc();
}

const myFunc = criarPessoa('Ariel', 29);

console.log(myFunc);