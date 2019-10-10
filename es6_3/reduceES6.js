//Ele recebe como parâmetro um callback e um valor inicial, com o objetivo de reduzir o array a um único valor. 

const numbers = [1,2,3]
const sum = (x, y) => x + y
const numbersSum = numbers.reduce(sum, 0) // 6