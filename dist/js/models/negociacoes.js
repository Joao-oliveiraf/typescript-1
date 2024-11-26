export class Negociacoes {
    constructor() {
        this.listaNegociacoes = [];
    }
    adicionar(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    listar() {
        return this.listaNegociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.listaNegociacoes, null, 2);
    }
}
