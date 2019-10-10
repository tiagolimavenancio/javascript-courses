//E existe a forma fácil (com map):

var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2},
    ...
];

var shortNamesMonths = months.map(function(month){
    return month.shortName
})

console.log(shortNamesMonths) // ['JAN', 'FEB', ...]