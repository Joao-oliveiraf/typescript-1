export class Negociacoes {
    constructor() {
        // private listaNegociacoes: Array<Negociacao>; - Raise TypeError: Cannot read properties of undefined (reading 'push')
        this.listaNegociacoes = [];
    }
    adicionar(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    listar() {
        return this.listaNegociacoes;
    }
}
