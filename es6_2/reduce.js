//Dado o array de meses que temos trabalhado até então, como podemos fazer para gerar uma acumulação de valores, ou reduzi-lo, em algum valor específico?

var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2},
    ...
];

var monthsAcc = months.reduce(function(acc, month) {
    return acc + '/' + month.shortName
}, '')

console.log(monthsAcc); // /JAN/FEB/MAR/APR...