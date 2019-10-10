//Podemos compor funções pequenas para gerar outras mais complexas de forma bem fácil em JavaScript. A vantagem é o poder de usar essas funções mais complexas, de forma simples, em toda aplicação. Ou seja, aumentamos o reuso.

const compose = (f, g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => x + '!';

const angry = compose(toUpperCase, exclaim);

angry('ahhh'); // AHHH!