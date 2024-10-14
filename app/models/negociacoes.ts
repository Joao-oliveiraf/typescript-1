import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private listaNegociacoes: Array<Negociacao>; - Raise TypeError: Cannot read properties of undefined (reading 'push')
    /**
     * Classe responsável por manter e atualizar uma array de objetos de Negociacao()
     */
    private listaNegociacoes: Negociacao[] = [];


    adicionar(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> {
        return this.listaNegociacoes;
    }
}