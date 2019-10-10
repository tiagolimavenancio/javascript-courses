//No escopo global (em um browser) o this se refere ao objeto window, tanto dentro quanto fora de uma função
document.write(this); //[object Window]

function func() {
    return this
}

document.write(func()); //[object Window]