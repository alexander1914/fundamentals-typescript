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
console.log();

console.log("Desafio Decorator...");
const usuarioLogado = {
    nome:  'Alexander Oliveira',
    email: 'alexander.oliveira99@gmail.com',
    admin: true
}

//Desafio
//Decorator
function perfilAdmin<T extends Construtor>(constructor: T) {
    return class extends constructor {
        constructor(...arg: any[]){
            super(...arg)
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão !')
            }
        }
    }
}

@perfilAdmin
class MudancaAdministrativa {
    critico(){
        console.log('Algo crítico foi alterado....');        
    }
}

new MudancaAdministrativa().critico()
console.log();

console.log("Decorator para métodos");
class ContaCorrent {
    private saldo: number
    
    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number){
        if (valor <= this.saldo) {
            this.saldo -= valor
            return true
        }else{
            return false
        }
    }

    @congelar
    //@naoNegativo
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrent(1500)
cc.sacar(150)
console.log(cc.getSaldo());

// Falha 
/*
cc.getSaldo = function() {
    return this['saldo'] + 7000
}
console.log(cc.getSaldo());
*/

//Object.freeze()
function congelar(alvo: any, nomePropriedade: string, 
    descritor: PropertyDescriptor) {
    console.log(alvo);
    console.log(nomePropriedade);    
    descritor.writable = false
}
console.log();
console.log("Decorator de Atributo");

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void {
            if(valor < 0){
                throw new Error('Saldo Inválido')
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}
console.log();

console.log("Decorator por Param");
function paramInfo(alvo: any, nomeMetodo: string,
    indiceParam: number) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);    
}