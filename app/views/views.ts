import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";

export abstract class View<T> {
    /**
     * Classe Pai das Views.
     * Implementa metodos update e template.
     */
    protected element: HTMLElement; // Acesso somente com Herança ou propria classe.

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    update(model: T): void {
        /**
         * Utiliza a propriedade "element" do construtor que é um DOM Element;
         * Adiciona HTML proveniente da função template() dentro da TAG "element"
         */
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    abstract template(model: T): string;
    /**
     * Adiciona as propriedades do(s) model(s) em uma template string de HTML
     * @returns - Uma string contendo codigo HTML e.g:'<p>${model.propriedade}</p>'
     */
}