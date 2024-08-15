console.log("Genericos");
//Generics: é bom para trabalhar com qualquer tipo com string, number e etc.
function echo(objeto: any) {
    return objeto
}

console.log(echo('Jesus Cristo').length);
console.log(echo(27).length);
console.log(echo({ nome: 'JC', idade: 27 }));
console.log();

//Usando Generics -> T
console.log("Usando Generics");
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('Jesus Cristo').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'JC', idade: 27 }).nome);
console.log();

//Generics disponíveis na API
//Arrays
console.log("Generics disponíveis na API");
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes);
console.log();

//Arrays 2
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string, idade: number}>([
    { nome: 'Mario Bros', idade: 21 },
    { nome: 'Maria João', idade: 50 },
    { nome: 'Antonio Oliveira', idade: 77 }
])
console.log();

//Tipo Genérico
console.log("Tipo Genérico");
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'));
console.log();

//Class com Generics
console.log("Class com Generics");
class OperacaoBinaria {
    constructor(public operando1: any, 
                public operando2: any) {}
    
    executar(){
        return this.operando1 + this.operando2
    }                
}

console.log("String: ", new OperacaoBinaria('Bom ', 'dia').executar());
console.log("Number: ", new OperacaoBinaria(12, 12).executar());
console.log("Number, String: ", new OperacaoBinaria(10, 'Jesus Cristo ').executar());
console.log();


console.log("Abstract Class Generics");
//Abstract Class Generics
abstract class OperacaoBinariaAbstract<T, R> {
    constructor(public operando1: T, 
                public operando2: T) {}    
    abstract executar(): R               
}

class SomaBinaria extends OperacaoBinariaAbstract<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}
console.log(new SomaBinaria(1000, 1000).executar());
console.log();

console.log("Datas");
console.log();

//Data
/* class DatasParaSonho extends OperacaoBinariaAbstract<Data, string>{
    getTime(data: Data): number{
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
} */

//const d1 = new Data(3, 10, 2017)
//const d2 = new Data(1, 4, 2024)
//console.log(new DatasParaSonho(d1, d2).executar());

console.log("Desafio Classe Fila");
// Atributo: fila (Array)
// Método: entrar, proximo, imprimir
class Fila<T extends string | number> {
    private fila: Array<T>
    
    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T){
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]){
            const primeiro = this.fila[0]
            this.fila.slice(0, 1)
            return primeiro
        }else{
            return null
        }
        
    }

    imprimir(){
        console.log(this.fila);        
    }
}

const fila = new Fila<string>('Alexander', 'Welligton', 'Phelipe', 'Danielle')

fila.imprimir()
fila.entrar('Antonio')
fila.imprimir()
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir()

const novaFila = new Fila<number>(99, 20, 21)
novaFila.imprimir()
console.log();

console.log("Desafio Mapa");
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Parc<C, V> = {chave: C, valor: V }
class Mapa<C, V> {
    items: Array<Parc<C, V>> = new Array<Parc<C, V>>()

    obter(chave: C): Parc<C, V> | null {
        const resultado = this.items
                .filter(i => i.chave === chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Parc<C, V>){
        const encontrado = this.obter(par.chave)
        if (encontrado) {
            encontrado.valor = par.valor
        }else{
            this.items.push(par)
        }
    }

    limpar(){
        this.items = new Array<Parc<C, V>>()
    }

    imprimir(){
        console.log(this.items);
        
    }
}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()



