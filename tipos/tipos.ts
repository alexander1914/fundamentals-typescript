// TypeScript é uma linguagem de tipos dinâmicos

console.log("String");
// string
let nome: string = 'Alexander'
console.log(nome)
console.log();

console.log("Number");
//number
let idade: number = 33
console.log(idade)
console.log();


console.log("Boolean");
//boolean
let temFaculdade: boolean = true
console.log(temFaculdade)
console.log();


console.log("Tipos explícidos");
//Tipos explícidos é quando declaramos um variável sem nenhum tipo 
let minhaIdade
console.log(typeof minhaIdade)

minhaIdade = 'Agora é 34 anos'
console.log(minhaIdade);

console.log("Array");
//array
let hobbies: any[] = ["Futebol", "Coding", "Video Games"]
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [99, 20, 21]
console.log(hobbies);
console.log();


console.log("Tuplas");
//Tuplas é um array de tipos pré quantidades definidas de tipos
let endereco: [string, number, number] = ["Av Paulista", 1000, 0]
console.log(endereco);
console.log();

console.log("Enum");
//enums
enum CorPalmeiras{
    Verde,
    Branco,
    Vermelho
}

let cor: CorPalmeiras = CorPalmeiras.Verde
console.log('Minha cor é: ' + cor);

console.log("Any");
//any é permite nós mudar o tipo para qualquer outro tipo
let carro: any = 'BMW'
console.log(carro);

carro = {
    marca: "BMW",
    ano: 2024
}
console.log(carro);
console.log();

console.log("Function");
//function podemos explícidas com seu tipo e sem retorno
function escreveNome(): string {
    return nome
}
console.log(escreveNome());

function palmeirasTemMundial(): void {
    console.log('Sim 1951 papai...');
    
}
console.log('Palmeiras tem Mundial?');
palmeirasTemMundial()

function meuDizimo(salario: number): number{
    let resultado: number = salario - 82
    return resultado
}

console.log(meuDizimo(820));
console.log();

console.log("Objeto tipo any");
//Objeto do tipo any

let usuario ={
    nome: 'Jesus Cristo',
    idade: 33
}

console.log(usuario);
console.log();

//Objeto com seus determinados tipos

let usuario2: {nome: string, idade: number} = {
    nome: 'Alexander Oliveira',
    idade: 34
}

console.log(usuario2);

let funcionario: {
    // parte 1 fazendo a definição do objeto
    supervisores: string [],
    baterPonto:(horas: number) => string
} = {
    // parte 2 fazendo atribuição do objeto
    supervisores: ['João', 'Fulano'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora de horário'
        }
    },
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

console.log("Type");
//Type é possível criar um tipo para seu objeto
type Funcionario = {
    supervisores: string [],
    baterPonto:(horas: number) => string
}
// Atribuindo pelo objeto Funcionario
let funcionario2 : Funcionario = {
    supervisores: ['Nathalia', 'Carla'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora de horário'
        }
    },
}
console.log();

console.log("Union");
//Union Types com este simbolo | é possível unir 2 tipos diferentes
let nota: number | string = 10
console.log(`Minha nota é ${nota} !`);
nota = '8'
console.log(`Minha nota é ${nota} !`);

//Checando os tipos
let valor = 30
if(typeof valor === "number"){
    console.log("É um number ...");    
}else{
    console.log(typeof valor);    
}
console.log();


console.log("Never");
//Never é quando vai terminar com erro
function falha(msg:string): never {
    throw new Error(msg)
} 

const produto = {
    nome: '',
    preco: -0,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0) {
            falha('É necessário ter um nome')
        }
        if (this.preco < 0) {
            falha('Preco inválido')
        }
    }
}
//console.log(produto.validarProduto());

//Null como utilizar no typescript é necessário o uniontypes
let numberOpcional: null | number = 11
numberOpcional = null
console.log(numberOpcional);



