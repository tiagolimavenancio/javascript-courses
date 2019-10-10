//46. Working with Parts of an Array: IndexOf, Splice and Slice

//O método indexOf() retorna o primeiro índice em que o 
//elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
var array = [2, 5, 9];
array.indexOf(2);     // 0

//O método splice() altera o conteúdo de uma lista, adicionando novos 
//elementos enquanto remove elementos antigos.
var myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
var removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]

var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]

//O método slice() retorna uma cópia de parte de um array a 
//partir de um subarray criado entre as posições início(begin) e 
//fim(end)(fim não é necessário) de um array original. 
//O Array original não é modificado.

var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
var citricos = frutas.slice(1, 3);
// citricos contem ['Laranja','Limao']