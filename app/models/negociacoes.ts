import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private listaNegociacoes: Array<Negociacao>; - Raise TypeError: Cannot read properties of undefined (reading 'push')
    private listaNegociacoes: Negociacao[] = [];


    adicionar(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> {
        return this.listaNegociacoes;
    }
}