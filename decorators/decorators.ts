console.log("Decorator");
// Decorator:
function logarClasse(construtor: Function){
    console.log(construtor);    
}

function decoratorVazio(_: Function) {}

function logarClassSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(a: string, b: number) {
    return function(_: Function): void {
        console.log(a + ' ' + b);        
    }
}
console.log();

console.log("Construtor com Decorator de Classe");
type Construtor = { new(...arg: any[]): {}}

function logarObjeto(constructor: Construtor) {
    console.log("Carregado...");    
    return class extends constructor{        
        constructor(...args: any[]) {
            console.log("Antes...");            
            super(...args);
            console.log("Depois...");            
        }
    }
}
//new Eletrodomestico
//new Eletrodomestico
//new Eletrodomestico
console.log();


console.log("Método com Decorator de Classe");

interface Eletrodomestico {
    imprimir?(): void
}

//@logarClasse
//@logarClassSe(false)
//@decorator('Testando o decorator', 123)
//@logarObjeto
//@imprimivel
class Eletrodomestico{
    constructor(){
        console.log("novo...");        
    }
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function(){
        console.log(this);        
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()
