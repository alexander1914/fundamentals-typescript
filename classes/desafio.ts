console.log("Class Moto");
class Moto {
    public velocidade: number = 0
    constructor(public nome: string) {
        
    }

    buzinar(){
        console.log("Biiiiii.....");        
    }
    acelerar(delta: number){
        this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade);
moto.acelerar(30)
console.log(moto.velocidade);
console.log();

console.log("Classe Objeto2D");
abstract class Objeto2D {        
    constructor(public base: number = 0, public altura: number = 0) {}
    
    abstract area(): number
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5,7)
//retangulo.base = 5
//retangulo.altura = 7
console.log(retangulo.area());
console.log();

console.log("Classe Getters e Setters");
class Estagiario {
    private _primeiroNome: string = ''
    
    get primeiroNome(){
        return this._primeiroNome
    }

    set primeiroNome(valor){
        if (valor.length >= 3) {
            this._primeiroNome = valor
        }else{
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome);

estagiario.primeiroNome = 'Alexander'
console.log(estagiario.primeiroNome);

estagiario.primeiroNome = 'Raissa'
console.log(estagiario.primeiroNome);



