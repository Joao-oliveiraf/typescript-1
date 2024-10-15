export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        this.element = document.querySelector(selector);
    }
    update(model, escapar) {
        /**
         * Utiliza a propriedade "element" do construtor que é um DOM Element;
         * Adiciona HTML proveniente da função template() dentro da TAG "element"
         */
        let template = this.template(model);
        if (escapar) {
            const exp = "/<script>[\s\S]*?<\/script>/";
            template.replace(exp, '');
        }
        this.element.innerHTML = template;
    }
}
