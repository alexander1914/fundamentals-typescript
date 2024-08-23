import Livro from "./modelo/livro";

const livro = new Livro('Dom Quixote', 110.80, 0.20)
console.log("Webpack");
console.log("Preço com desconto: ", livro.precoComDesconto());
