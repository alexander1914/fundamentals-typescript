console.log('Interface...');
//Interface: ela pode ter apenas métodos abstratos porque, 
// ela apenas mostra as funcionalidades não implementa nenhum tipo inteligência,
// só quem implementa deve fazer. 

interface Humano {
    nome: string
    idade?: number // opcional
    [prop: string]: any // atributo dinâmico
    saudar(sobrenome: string): void
}

function welcomeHi(pessoa: Humano) {
    console.log('Hi... ' + pessoa.nome);    
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'Alexander',
    idade: 34,
    saudar(sobrenome: string) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);           
    }
}

welcomeHi(pessoa)
mudarNome(pessoa)
welcomeHi(pessoa)
pessoa.saudar("Albuquerque Oliveira")
//welcomeHi({nome: 'Maria', idade: 34, xwz: true})
console.log();

//Usando Classes...
console.log("Utilizando Classes..");

class Cliente implements Humano {
    nome: string = ''
    date: Date = new Date
    saudar(sobrenome: string): void {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
}

const cliente = new Cliente()
cliente.nome = 'Kevin'
welcomeHi(cliente)
cliente.saudar('Lukaku')
console.log(cliente.date);
console.log();

console.log("Interface Função");
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function(base: number, exp: number): number {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
console.log();

console.log("Herança");
console.log("é a capacidade de herdar da classe pai os métodos e atributos para as classes filhas");

//Herança é a capacidade de herdar da classe pai os métodos e atributos para as classes filhas.
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A,B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

//function teste(b: B){}
//teste(new RealABC)

abstract class AbstrataABD implements A, B{
    a(): void {}
    b(): void {}
    abstract d(): void
}
console.log();

console.log("Object Interface");

interface Object {
    log(): void    
}

Object.prototype.log = function() {
    console.log(this.toString());    
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const pes = {
    nome: 'Alexander ',
    sobrenome: 'Oliveira',
    toString(){
        return this.nome + this.sobrenome
    }
}
console.log(pes.toString());
console.log();




