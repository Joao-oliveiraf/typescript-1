import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel { // Apenas UMA herança, MULTIPLAS Interfaces
    // private listaNegociacoes: Array<Negociacao>; - Raise TypeError: Cannot read properties of undefined (reading 'push')
    /**
     * Classe responsável por manter e atualizar uma array de objetos de Negociacao()
     */
    private listaNegociacoes: Negociacao[] = [];


    public adicionar(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao);
    }

     public listar(): ReadonlyArray<Negociacao> {
        return this.listaNegociacoes;
    }
    public paraTexto(): string {
        return JSON.stringify(this.listaNegociacoes, null, 2)
    }
}