import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private listaNegociacoes: Array<Negociacao>;


    adicionar(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> {
        return this.listaNegociacoes;
        /*for (let negociacao of Negociacoes.listaNegociacoes) {
            console.log(negociacao)
        }*/
    }
}