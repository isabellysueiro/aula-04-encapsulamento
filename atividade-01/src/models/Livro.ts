export class Livro {
    private titulo: string;
    private paginas: number;

    constructor(titulo: string, paginas: number) {
        this.titulo = titulo;
        this.paginas = paginas;
    }

    public get getTitulo(): string {
        return this.titulo;
    }

    public get getPaginas(): number {
        return this.paginas;
    }

    public set setTitulo(novoTitulo: string) {
        // O título não pode ser vazio
        if (novoTitulo.trim().length === 0) {
            console.log("\nERRO: O título não pode ser vazio!");
            return;
        }

        this.titulo = novoTitulo;
        console.log("\nTítulo alterado com sucesso!");
    }

    public set setPaginas(novasPaginas: number) {
        // O número de páginas deve ser positivo
        if (!Number.isInteger(novasPaginas) || novasPaginas <= 0) {
            console.log("\nERRO: Informe um número inteiro de páginas maior que zero!");
            return;
        }

        this.paginas = novasPaginas;
        console.log("\nNúmero de páginas atualizado com sucesso!");
    }
}