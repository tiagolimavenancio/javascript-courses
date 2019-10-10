//A função map invoca um callback e retorna um novo array com o resultado desse callback aplicado em cada item do array inicial.

var numbers = [1,2,3]
var square = function(x) {
    return x * x
}

var squaredNumbers = numbers.map(square) // [1, 4, 9]