import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";

export abstract class View<T> {
    /**
     * Classe Pai das Views.
     * Implementa metodos update e template.
     */
    protected element: HTMLElement; // Acesso somente com Herança ou propria classe.
    protected escapar: boolean = false;

    constructor(selector: string, escapar?:boolean){
        this.element = document.querySelector(selector);
    }

    public update(model: T, escapar?:boolean): void {
        /**
         * Utiliza a propriedade "element" do construtor que é um DOM Element;
         * Adiciona HTML proveniente da função template() dentro da TAG "element"
         */
        let template = this.template(model);
        if (escapar){
            const exp = "/<script>[\s\S]*?<\/script>/"
            template.replace(exp, '')
        }
        this.element.innerHTML = template;
    }
    protected abstract template(model: T): string;
    /**
     * Adiciona as propriedades do(s) model(s) em uma template string de HTML
     * @returns - Uma string contendo codigo HTML e.g:'<p>${model.propriedade}</p>'
     */
}