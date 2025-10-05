// funções recursivas
let i = 0;

function main() {
    debugger;
    console.log(`Executou a função main ${++i} vezes`); 
    
    if(i === 10) {
        return;
    }
    
    main();
}


main();
