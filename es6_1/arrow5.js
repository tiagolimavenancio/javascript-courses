//Com as arrow functions isso não é necessário. O this funcionará exatamente da forma esperada
function Widget() {
    const button = document.getElementById('button')
    button.addEventListener('click', () => {
        this.doSomething() // o 'this' aponta para Widget e não provocará nenhum erro.
    })
}