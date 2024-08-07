namespace Geometria{    
    export namespace Area{                            
        export function retangulo(base: number, altura: number): number {
            return base * altura
        }
    }
}
console.log(Geometria.Area.retangulo(10,20));