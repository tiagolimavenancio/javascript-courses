//A técnica de transformar uma função com múltiplos parâmetros em uma sequência de funções que aceitam apenas um parâmetro

var add = function(x) {
    return function(y) {
        return x + y;
    };
};

add(1)(2); // 3