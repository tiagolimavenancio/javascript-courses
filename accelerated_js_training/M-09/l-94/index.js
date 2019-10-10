//94. Creating and Inserting Elements

var p = document.createElement('P')
p.textContent = 'A new paragraph!'
p.style.fontSize = '17px'

var li = document.querySelector('li')
// li.appendChild(p)

var a = li.firstElementChild
li.insertBefore(p, a)