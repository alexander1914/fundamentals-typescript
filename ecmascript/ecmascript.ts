console.log("LET:");
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
console.log();
console.log("CONST");
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
console.log();

console.log("Arrow Function:");
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
console.log();

console.log("this:");
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
console.log();

console.log("Parâmetros Padrão:");
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
console.log();

console.log("Spread:");
//Rest & Spread

//... Spread é para espalhar 
const number = [1, 10, 99, -5]
console.log(Math.max(...number));

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = 
      ['Jojo', 'Joice', 'Megan', ...turmaA]
console.log(turmaB);
console.log();

console.log("Rest:");
//Rest é para juntar
function retornarArray(...args: number[]): number[] {        
    return args
}

const numeros = retornarArray(10, 20, 30, 50)
console.log(numeros);
console.log();

console.log("Tupla:");
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
console.log();

console.log("Destructuring:");
//Destructuring (array)
const caracteristica = ['Motor Zetec 1.8', 2020]

const [motor, ano] = caracteristica
console.log(motor);
console.log(ano);

const item = {
    nome: "Hyper X mouse",
    preco: 150,
    caracteristica: {
        w: 'Importado Made Brazil'
    }
}
console.log();

console.log("Objeto Destructuring:");
//Acessando a partir de um Objeto Destructuring
const nomeItem = item.nome
const precoItem = item.preco
const caracteristicaItem = item.caracteristica.w
console.log(nomeItem);
console.log(precoItem);
console.log(caracteristica);


const { nome: n, preco: p, caracteristica: c } = item
console.log(n);
console.log(p);
console.log(c);
console.log();

console.log("Template String:");
//Template String:
//Antes
const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '9'
const boasVindas = 'Boas Vindas ' + usuarioID +
'Notificacaçoes: ' + notificacoes
console.log(boasVindas);

//Template String: é uma forma mais simples concatenar textos e valores
const boasVindasTemplateString = `
        Boas vindas ${usuarioID},
        Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindasTemplateString);
console.log(`${(2000 - 200) * 3}`);
console.log();

console.log("Promises:");
//Promises: é uma promessa algo que vai chegar no futuro que trabalha com sincronismo.
//OBS: a vantangem que nós conseguimos encadear de uma forma mais tranquila as chamadas.
//Callback
function esperar3s(callback: (dado: string) => void) {
    setTimeout(() =>{
        callback('3s depois...')                
    }, 3000)
}

esperar3s(function(resultado: string) {
    console.log(resultado);    
})

function esperar3sPromise() {
    return new Promise((resolve: any) =>{
        setTimeout(() =>{
            resolve('3s depois...')                
        }, 3000)
    })    
}

esperar3sPromise()
    .then(dado => console.log(dado))

fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Error com o Catch...' + err))    


