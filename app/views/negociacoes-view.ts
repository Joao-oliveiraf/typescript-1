import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./views.js";

export class NegociacoesView extends View {
    /**
     * Responsável por criar o HTML da table em um elemento pré-existente no DOM
     * @template - Retorna uma string da table a ser convertida
     * @update - Com a string de template(), renderiza o elemento no DOM.
     */


    template(model: Negociacoes): string {
        /**
         * Adiciona as propriedades dos models em uma template string de HTML
         * Utiliza o map() para percorrer uma array de objetos, lendo as propriedades destes, escrevendo-as em <tr> e <td>.
         * @param model - Array de objetos da classe Negociacao().
         * @returns - Uma string de HTML contendo os dados lidos da array de objetos.
         */
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${model.listar()?.map(negociacao => { // ? Operator verifica se a array está vazia
                return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}