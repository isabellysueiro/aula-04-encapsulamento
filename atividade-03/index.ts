import readLine from "readline-sync";
import { Jogo } from "./src/models/Jogo.js";

// Criando o objeto
const objJogo = new Jogo("Minecraft", 100);

// Mostrando os dados iniciais
console.log("\n--- DADOS DO JOGO ---");
console.log("Titulo: " + objJogo.getTitulo());
console.log("Preco: R$ " + objJogo.getPreco());

// Alterando o titulo
const novoTitulo = readLine.question(
    "\nDigite o novo titulo do jogo: "
);
objJogo.setTitulo(novoTitulo);

// Alterando o preco
const novoPreco = readLine.questionFloat(
    "Digite o novo preco do jogo: R$ "
);
objJogo.setPreco(novoPreco);

// Mostrando os dados atualizados
console.log("\n--- DADOS ATUALIZADOS ---");
console.log("Titulo: " + objJogo.getTitulo());
console.log("Preco: R$ " + objJogo.getPreco());