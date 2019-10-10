//106. Event Object Properties

var inner = document.querySelector('#inner')
var outer = document.querySelector('#outer')

inner.addEventListener('click', innerListener)
outer.addEventListener('click', outerListener)

function innerListener(event) {
    console.log(event.clientX, event.clientY)
    event.stopPropagation();
    console.log('Clicked Inner!')
}

function outerListener(event) {
    console.log('Clicked Outer!')
}