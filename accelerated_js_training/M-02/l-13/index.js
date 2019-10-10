// Em JavaScript, funções e variáveis são hoisted (ou "levados ao topo"). Hoisting é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra).
// Isso significa que você é capaz de usar uma função ou variável antes mesmo de tê-las declaradas, ou em outras palavras: uma função ou variável podem ser declaradas depois de já terem sido utilizadas.

//Variáveis:
foo = 2
var foo;

// é implicitamente entendido como:

var foo;
foo = 2;

//Funções:
hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}