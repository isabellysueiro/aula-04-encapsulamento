export class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getNome(): string {
        return this.nome;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setNome(novoNome: string): void {
        if (novoNome.trim().length === 0) {
            console.log("\nERRO: O nome não pode ser vazio!");
            return;
        }

        this.nome = novoNome;
        console.log("\nNome alterado com sucesso!");
    }

    public setSalario(novoSalario: number): void {
        if (novoSalario < 0) {
            console.log("\nERRO: O salário não pode ser negativo!");
            return;
        }

        this.salario = novoSalario;
        console.log("\nSalário atualizado com sucesso!");
    }
}