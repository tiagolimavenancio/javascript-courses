//A tradução de hoist é içar, levantar ou suspender. E é isso que acontece em JavaScript quando declaramos uma variável: ela é levantada até o topo do escopo

var n = 1;
function init() {
    console.log(n)
    var n = 2
}

init()

//As respostas mais comuns são 1 ou 2, mas a resposta correta é undefined. A declaração de variáveis em JavaScript é hoisted (ou elevada), mas não sua inicialização.
