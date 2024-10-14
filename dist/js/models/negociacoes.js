export class Negociacoes {
    constructor() {
        // private listaNegociacoes: Array<Negociacao>; - Raise TypeError: Cannot read properties of undefined (reading 'push')
        /**
         * Classe responsável por manter e atualizar uma array de objetos de Negociacao()
         */
        this.listaNegociacoes = [];
    }
    adicionar(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    listar() {
        return this.listaNegociacoes;
    }
}
