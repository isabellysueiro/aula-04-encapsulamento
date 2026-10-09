import readLine from "readline-sync";
import { Livro } from "./src/models/Livro.js";

// Criando um objeto da classe Livro
const objLivro = new Livro("Dom Casmurro", 256);

// Mostrando os dados iniciais
console.log("\n--- DADOS INICIAIS DO LIVRO ---");
console.log("Título:", objLivro.getTitulo);
console.log("Páginas:", objLivro.getPaginas);

// Pedindo novos dados ao usuário
const novoTitulo = readLine.question("\nDigite o novo título do livro: ");
objLivro.setTitulo = novoTitulo;

const novasPaginas = readLine.questionInt(
    "Digite o novo número de páginas: "
);
objLivro.setPaginas = novasPaginas;

// Mostrando os dados atualizados
console.log("\n--- DADOS ATUALIZADOS DO LIVRO ---");
console.log("Título:", objLivro.getTitulo);
console.log("Páginas:", objLivro.getPaginas);