//47. Filtering, Mapping and Reversing Array Elements

//O método map() invoca a função callback passada por argumento 
//para cada elemento do Array e devolve um novo Array como resultado.

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]

//O método reverse() inverte os itens de um array. 
//O primeiro elemento do array se torna o último e o último torna-se 
//o primeiro.
var myArray = ['one', 'two', 'three'];
myArray.reverse(); 
console.log(myArray) // ['three', 'two', 'one']
