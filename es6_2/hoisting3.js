//Para evitar problemas inesperados, tente sempre declarar todas a variáveis no topo do escopo, mesmo que você não as tenha inicializado ainda.
//Ou então atualize para o ES6 e passe a usar as keywords let e const.

// com var, o valor do segundo console.log não é esperado
function var() {
    var n = 1;
    if (true) {
      var n = 2;
      console.log(n); // 2
    }
    console.log(n); // 2 
  }
  
  // com let, o valor do segundo console.log é esperado
  function let() {
    let n = 1;
    if (true) {
      let n = 2;
      console.log(n); // 2
    }
    console.log(n);  // 1
  }