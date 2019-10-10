var myself = { firstName: 'Matheus', lastName: 'Lima' }

function showFullName() {
    console.log(this.firstName + " " + this.lastName)
}

showFullName.call(myself) // Matheus Lima
showFullName.apply(myself) // Matheus Lima