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



