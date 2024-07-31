console.log("Estudando sobre classes...");
console.log("Classes");
//Classe é representa um objeto contendo seus atributos e métodos(comportamentos)

class Data {
    //public é modificador de acesso padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

//Criando objeto da classe criada
const meuAniversario = new Data(24,7,1990)
console.log(`Meu aniversário é: ${meuAniversario.dia} / ${meuAniversario.mes} / ${meuAniversario.ano}`);

const meuCasamento = new Data(20,1,2018)
console.log(`Data do meu casamento: ${meuCasamento.dia} / ${meuCasamento.mes} / ${meuCasamento.ano}`);

//const festa = new Data // posso omitir por exemplo

class DataEsperta {    
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
    }
}

const aniversárioEsperto = new DataEsperta(24,7,1990)
console.log(`Meu aniversário é: ${aniversárioEsperto.dia} / ${aniversárioEsperto.mes} / ${aniversárioEsperto.ano}`);

const casamentoEsperto = new DataEsperta(20,1,2018)
console.log(`Data do meu casamento: ${casamentoEsperto.dia} / ${casamentoEsperto.mes} / ${casamentoEsperto.ano}`);

class Produto{
    constructor(public nome: string, public preco: number, public desconto: number = 0){
    }
    //Criando um método para a class
    public resumo(): string {
        return `${this.nome} custa R$${this.preco} e o valor com desconto é de ${this.precoComDesconto()}%`
    }
    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
}

const produto1 = new Produto("teclado hyper x", 250.50, 10.0)
console.log(`Produto: ${produto1.resumo()}`);
console.log();

console.log("Modificadores de acesso..");

class Carro {
    private velocidadeAtual: number = 0

    constructor (public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200){            
        }

        private alterarVelocidade(delta: number): number {
            const novaVelociodade = this.velocidadeAtual + delta
            const velocidadeValida = novaVelociodade >= 0
            && novaVelociodade <= this.velocidadeMaxima
            
            if(velocidadeValida){
                this.velocidadeAtual = novaVelociodade
            }else{
                this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
            }

            return this.velocidadeAtual
        }

        public acelerar(): number {
            return this.alterarVelocidade(5)
        }

        public frear(): number {
            return this.alterarVelocidade(-5)
        }
    }

    const carro1 = new Carro('Ford', 'Ka', 185)
    Array(50).fill(0).forEach(() => carro1.acelerar())
    console.log(carro1.acelerar());
    
    Array(30).fill(0).forEach(() => carro1.frear())
    console.log(carro1.frear());
    
    