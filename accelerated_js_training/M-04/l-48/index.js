//48. The Difference between Concat and Join

//O método concat() retorna um novo array contendo todos os 
//arrays ou valores passados como parâmetro
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
var alphaNumeric = alpha.concat(numeric);


//O método join() junta todos os elementos de uma array 
//(ou um array-like object) em uma string e retorna esta string.

var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"