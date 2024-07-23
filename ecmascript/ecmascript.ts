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

//Arrow Function: é uma função objetivo dela é ter uma sintax mais reduzida
const somar = function(n1: number, n2: number): number{
    return n1 + n2;
}
console.log(somar(2000,2500));

const subtrair = (n1: number, n2:number) => n1 - n2
console.log(subtrair(1000,900));

const saudacao = () => console.log("Oi typescript...");
saudacao()

const falarCom = (pessoa: string) => console.log('Oi... ' + pessoa);
falarCom('Nathália')

//this
function normalComThis(this: any) {
    console.log(this);
    
}
normalComThis()

const normalComThisEspecial = normalComThis
        .bind({nome: 'Alexander'})
normalComThisEspecial()

//const arrowComThis = () => console.log(this);
//arrowComThis()

//Parâmetros Padrão: ser caso você não definir o valor padrão
function contagemRegressiva(inicio: number = 3,
    fim: number = inicio - 5): void {
    console.log(inicio);
    console.log("Inicio");
    
    while (inicio >= fim) {
        inicio--
        console.log(inicio);        
    }
    console.log("Fim!");
    
}
contagemRegressiva(3)

//Rest & Spread

//... Spread é para espalhar 
const number = [1, 10, 99, -5]
console.log(Math.max(...number));

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = 
      ['Jojo', 'Joice', 'Megan', ...turmaA]
console.log(turmaB);

//Rest é para juntar
function retornarArray(...args: number[]): number[] {        
    return args
}

const numeros = retornarArray(10, 20, 30, 50)
console.log(numeros);

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)    
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);    
}

tuplaParam2(...tupla)

//Destructuring (array)
const caracteristica = ['Motor Zetec 1.8', 2020]

const [motor, ano] = caracteristica
console.log(motor);
console.log(ano);

