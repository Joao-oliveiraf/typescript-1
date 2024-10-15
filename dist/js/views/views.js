export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model, text) {
        /**
         * Utiliza a propriedade "element" do construtor que é um DOM Element;
         * Adiciona HTML proveniente da função template() dentro da TAG "element"
         */
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
