//A função filter é bem semelhante ao map: ela também recebe um callback como parâmetro e também retorna um novo array, a única diferença é que filter, como o próprio nome diz, retorna um filtro dos elementos do array inicial baseado na função de callback.

var numbers = [1, 4, 7, 10];

var isBiggerThanFour = function(value) {
    return value > 4;
};

var numbersBiggerThanFour = numbers.filter(isBiggerThanFour); // [7, 10]