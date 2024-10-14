import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";

export class View {
    /**
     * Classe Pai das Views.
     * Implementa metodos update e template.
     */
    protected element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    template(model: Negociacoes): string {
        throw Error('Classe filha precisa implementar o método template()')
    }
}