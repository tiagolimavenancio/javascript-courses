//Quando usamos o this numa função invocada sem contexto então o bind é feito no contexto global, mesmo se a função for definida dentro de um objeto

var context = 'global'

var object = {
    context: "object",
    method: function() {
        function func() {
            var context = 'function'
            return this.context;
        }
        return func()
    }
}

document.write(object.method()) //global