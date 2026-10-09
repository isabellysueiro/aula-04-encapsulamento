import readLine from "readline-sync";
import { Funcionario } from "./src/models/Funcionario.js";

// Criando um funcionário
const objFuncionario = new Funcionario("Carlos", 2500);

// Mostrando os dados atuais
console.log("\n--- DADOS DO FUNCIONÁRIO ---");
console.log("Nome:", objFuncionario.getNome());
console.log("Salário:", objFuncionario.getSalario());

// Pedindo o novo nome
const novoNome = readLine.question("\nDigite o novo nome: ");
objFuncionario.setNome(novoNome);

// Pedindo o novo salário
const novoSalario = readLine.questionFloat(
    "Digite o novo salário: "
);
objFuncionario.setSalario(novoSalario);

// Mostrando os dados atualizados
console.log("\n--- DADOS ATUALIZADOS ---");
console.log("Nome:", objFuncionario.getNome());
console.log("Salário:", objFuncionario.getSalario());