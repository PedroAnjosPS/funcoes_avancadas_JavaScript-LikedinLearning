// ** parâmetro posicional **

/*function calculador(valorX, valorY) {
    console.log(valorX + valorY);

}; */

//calculador(5, 10);

// ** parâmetros com valor default **

/*function calculador(valorX, valorX) {
    console.log("Valores passados para a função: \n" + valorX, valorX);
    console.log("Soma dos valores passados: \n", valorX + valorX);

};

calculador(undefined, 2);*/

// ** atribuição por desestruturação **

// const { nome, idade } = {
//     nome: 'Ariel',
//     idade: 25
// };

// console.log(nome, idade);

//const [nome, idade] = ['Ariel', 25];

// function printUser([nome, idade]) {
//     console.log("Nome: " + nome, "\nIdade: " + idade + " anos");
// };

// printUser(['Ariel', 25]);

// ** atribuição por rest operator **

// function printUser({ nome, idade, ...props}) {
//     console.log("Nome: " + nome, "\nIdade: " + idade + " anos\n", props);
// };

function printUser() {
    //console.log(arguments[0]);
    //console.log(arguments[0].nome);
    console.log(arguments);
}

printUser({
    nome: 'Pedro',
    idade: 19,
    corFavorita: 'Preto',
    sexo: 'M'
}, 'segundo argumento');

