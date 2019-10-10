const sum = (start, ...numbers) =>
    numbers.reduce((acc, current) => acc + current, start)

sum (10, 1,2,3,4,5) //25