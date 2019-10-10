const months = ['JAN', 'FEV', 'MAR', /*...*/ , 'DEZ'];

const monthsShortener = (previous, current) => {
    if (previous === '') {
        return current;
    } else {
        return previous + '/' + current;
   }
};

const shortenedMonths = months.reduce(monthsShortener, '');
// JAN/FEV/MAR ... /DEZ