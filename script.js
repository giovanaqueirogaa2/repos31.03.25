// Variáveis
let nome = "João";
let idade = 30;
let ehEstudante = false;

// Saída no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("É estudante?", ehEstudante);

// Condicionais
if (idade >= 18) {
  console.log("É adulto.");
} else {
  console.log("É menor de idade.");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("Iteração:", i);
}

// Funções
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

let mensagem = saudacao("Maria");
console.log(mensagem);

// Arrays
let numeros = [1, 2, 3, 4, 5];
console.log("Números:", numeros);

// Objetos
let pessoa = {
  nome: "Pedro",
  idade: 25,
  profissao: "Engenheiro"
};

console.log("Pessoa:", pessoa);
console.log("Nome da pessoa:", pessoa.nome);