export class Jogo {
    private titulo: string;
    private preco: number;

    constructor(titulo: string, preco: number) {
        this.titulo = titulo;
        this.preco = preco;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setTitulo(novoTitulo: string): void {
        // O titulo nao pode ser vazio
        if (novoTitulo.trim().length === 0) {
            console.log("\nERRO: O titulo nao pode ser vazio!");
            return;
        }

        this.titulo = novoTitulo;
        console.log("\nTitulo alterado com sucesso!");
    }

    public setPreco(novoPreco: number): void {
        // O preco nao pode ser negativo
        if (novoPreco < 0) {
            console.log("\nERRO: O preco nao pode ser negativo!");
            return;
        }

        this.preco = novoPreco;
        console.log("\nPreco atualizado com sucesso!");
    }
}