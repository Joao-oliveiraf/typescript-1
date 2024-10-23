export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model, escapar) {
        let template = this.template(model);
        if (escapar) {
            const exp = "/<script>[\s\S]*?<\/script>/";
            template.replace(exp, '');
        }
        this.element.innerHTML = template;
    }
}
