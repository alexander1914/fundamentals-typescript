console.log("Modulos");
//Modulos: são para exportar funções de outro determinado arquivo
import { areaRetangulo } from "./retangulo";
import { areaCircuferencia } from "./circunferencia";

//Atribuindo um alias para a sua function
//import { areaRetangulo as ret } from "./retangulo";
//import { areaCircuferencia as circ } from "./circunferencia";

console.log(areaRetangulo(7, 8))
console.log(areaCircuferencia(2));
console.log();

console.log("Padrão CommonsJS");
const { digaOi } = require('./novo')
console.log(digaOi('Alexander Oliveira'));

