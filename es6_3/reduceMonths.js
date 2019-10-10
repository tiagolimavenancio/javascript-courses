//Mas o reduce não serve apenas para somas, podemos também trabalhar com strings. Imaginando que nós temos um array de meses e precisamos retornar o meses dessa forma: JAN/FEV/MAR … / DEZ. 

var months = ['JAN', 'FEV', 'MAR', /*...*/ , 'DEZ'];

var monthsShortener = function(previous, current) {
    return previous + '/' + current;
};

var shortenedMonths = months.reduce(monthsShortener, '');
// /JAN/FEV/MAR ... /DEZ