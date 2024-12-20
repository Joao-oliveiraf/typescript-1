import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    /**
     * Classe Pai das Views.
     * Implementa metodos update e template.
     */
    protected element: HTMLElement; // Acesso somente com Herança ou propria classe.
    

    constructor(selector: string, escapar?:boolean){
        const elemento = document.querySelector(selector)
        if (elemento) {
            this.element = elemento as HTMLElement;
        } else{
            throw Error(`Seletor ${selector} não existe no DOM`)
        }

    }
    @logarTempoDeExecucao()
    @inspect
    public update(model: T, escapar?:boolean): void {
        /**
         * Utiliza a propriedade "element" do construtor que é um DOM Element;
         * Adiciona HTML proveniente da função template() dentro da TAG "element"
         */
        let template = this.template(model);
        this.element.innerHTML = template;
    }
    protected abstract template(model: T): string;
    /**
     * Adiciona as propriedades do(s) model(s) em uma template string de HTML
     * @returns - Uma string contendo codigo HTML e.g:'<p>${model.propriedade}</p>'
     */
}