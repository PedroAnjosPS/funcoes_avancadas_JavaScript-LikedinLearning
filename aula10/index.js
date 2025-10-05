// função construtora

const data = {
    nome: "Pedro",
    add() {
        this.idade = 19;
        console.log(this);
    }
};

//data.add();

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const { nome, idade } = new Pessoa("Pedro", 19);
console.log("Nome: " + nome);
console.log("Idade: " + idade + " anos");