function multiplicador(a) {
    return function(b) {
        return a * b;
    };
}

console.log("Resultado: " + multiplicador(5)(10));