//LET : é uma variável que pode ser alterado o seu valor.
//OBS: também tem o escopo de bloco

//var: as variáveis que são definidas com var elas são insatas.
//var seraQuePode = '?' // hoisting
let seraQuePode = '?' // hoisting
console.log(seraQuePode);

let estaFrio = true
if(estaFrio){
   let acao = 'Colocar o casaco...'
   console.log(acao);
}

//CONST: é uma variável que não podemos alterar o valor dela.
//OBS: também tem o escopo de bloco

const cpf: string = '123.456.789-00'
//cpf = '789.456.123-00'
console.log(cpf);

var segredo = 'Brunna'
function revelar() {
    const segredo = 'Eduarda'
    console.log(segredo);    
}
revelar()
console.log(segredo);

for (var i = 0; i < 10; i++) {
    console.log(i);        
}



