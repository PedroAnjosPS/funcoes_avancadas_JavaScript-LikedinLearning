/*
    funções auto executáveis
    (também conhecidas como IIFEs - Immediately Invoked Function Expression)
*/

// funções auto executáveis no início do código
(async (idade) => {
    let nome = "Pedro";
    console.log("Olá, ", nome, `\nVocê tem ${idade} anos de idade`);

    const resultado = await Promise.resolve('promise resolvida');
    console.log("\n\nExecutou: ", resultado);
})(19);