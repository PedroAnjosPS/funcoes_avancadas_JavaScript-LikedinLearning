// função geradora (ou generator function)

function* gerador() {
    let i = 0;
    
    //yield 1; // como se fosse um return --> Determina quantas instruções a função geradora irá executar

    while(i < 6) {
        yield i;
        ++i;
    }

}

const g = gerador();

for (let index = 0; index <= 10; index++) {
    console.log(g.next());
}