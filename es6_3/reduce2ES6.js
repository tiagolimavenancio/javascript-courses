//O primeiro parâmetro é a função que será aplicada, no caso uma soma. E o segundo parâmetro é o valor inicial. Se por algum motivo precisássemos começar a soma com 10, faríamos dessa forma

const numbers = [1, 2, 3];
const sum = (x, y) => x + y;
const numbersSum = numbers.reduce(sum, 10); // 16