console.log("NameSpaces");
//NameSpaces: é quando criamos espaços de nomes que é um espaço reservado.

namespace Geometria{
    console.log("Name Spaces Alinhados");
    export namespace Area{
        const PI = 3.14
    
        export function Circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }
        
        export function Retangulo(base: number, altura: number): number {
            return base * altura
        }
    }
}

const PI = 2.99
console.log(Geometria.Area.Circunferencia(10));
console.log(Geometria.Area.Retangulo(10,20));
console.log(PI);
console.log();

console.log("Imports por referência");

////<reference path="geometriaCirc.ts"/>
////<reference path="geometriaRetan.ts"/>

//console.log(Geometria.Area.circunferencia(5));
//console.log(Geometria.Area.retangulo(5, 5));
//console.log();









