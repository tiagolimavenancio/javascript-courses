var months = ['JAN', 'FEV', 'MAR', /*...*/ , 'DEZ'];

var monthsShortener = function(previous, current) {
    if (previous === '') {
        return current;
    } else {
        return previous + '/' + current;
   }
};

var shortenedMonths = months.reduce(monthsShortener, '');
// JAN/FEV/MAR ... /DEZ