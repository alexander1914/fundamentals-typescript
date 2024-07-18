console.log('Aula de Compilador...');
// Compilador é responsável pelo gerenciamento do typescript para javascript
// e de fazer a tradução para o browser.
// é necessário alterar o tsconfig para definir algumas configurações

//"noEmitOnError" É para não emitir js no caso de erro.
//"noEmitOnError": true

let canal: string = 'Gaveta'
let inscritos: number = 132145

//canal = inscritos
console.log(`Canal = ${canal}`);

//nome = 'Pedro'
//console.log(`Nome = ${nome}`);

/* Language and Environment */
//"target": "es2016"    
// para definir a versão do javascript

//"sourceMap" é criar um mapemento do codigo brower com o arquivo original.
//"sourceMap": true

//"noImplicitAny": É para não implicitar com a definição do tipo any no paramêtro.
//para não validar como um erro essa questão.

//function example(a, b) {}  

function soma(a: any, b: any) {
    //"noImplicitAny": false    
    console.log(` "Nome dele é: ${a + b}" `);     
    return a + b
}
soma("Jesus ","Cristo")

//"strictNullChecks" é para fazer a checagem de eventuais nulos no código
//"strictNullChecks": false

//"noUnusedParameters" é para fazer a checagem de parametros nulos no código
//"noUnusedParameters": true

//"noUnusedLocals" é para fazer a checagem de variáveis nulas no código
//"noUnusedLocals": true
function saudar(isManha: boolean): string {    
    let saudacao: string
    if (isManha) {
        saudacao = "Good morning"
    }else{
        saudacao = "Jesus te Ama..."
    }
    return saudacao;
}
console.log(saudar(true));

//"outDir": é o diretorio para definir o será gerado o seu pacote do build.
//"outDir": "./build"



