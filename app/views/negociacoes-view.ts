import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
    /**
     * Responsável por criar o HTML da table em um elemento pré-existente no DOM
     * @template - Retorna uma string da table a ser convertida
     * @update - Com a string de template(), renderiza o elemento do DOM.
     */

    private element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }
    template(model: Negociacoes): string {
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