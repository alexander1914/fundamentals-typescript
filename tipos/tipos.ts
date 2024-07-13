// TypeScript é uma linguagem de tipos dinâmicos


// string
let nome: string = 'Alexander'
console.log(nome)

//number
let idade: number = 33
console.log(idade)

//boolean
let temFaculdade: boolean = true
console.log(temFaculdade)

//Tipos explícidos é quando declaramos um variável sem nenhum tipo 
let minhaIdade
console.log(typeof minhaIdade)

minhaIdade = 'Agora é 34 anos'
console.log(minhaIdade);

//array
let hobbies: any[] = ["Futebol", "Coding", "Video Games"]
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [99, 20, 21]
console.log(hobbies);

//Tuplas é um array de tipos pré quantidades definidas de tipos
let endereco: [string, number, number] = ["Av Paulista", 1000, 0]
console.log(endereco);

//enums
enum CorPalmeiras{
    Verde,
    Branco,
    Vermelho
}

let cor: CorPalmeiras = CorPalmeiras.Verde
console.log('Minha cor é: ' + cor);

//any é permite nós mudar o tipo para qualquer outro tipo
let carro: any = 'BMW'
console.log(carro);

carro = {
    marca: "BMW",
    ano: 2024
}
console.log(carro);

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

