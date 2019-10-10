// No exemplo abaixo em ES5, podemos observar o this sendo utilizado de forma errada
function Widget() {
    var button = document.getElementById('button');
    button.addEventListener('click', function() {
        this.doSomething() // o 'this' não aponta para Widget como esperado e provocará um erro.
    })
}