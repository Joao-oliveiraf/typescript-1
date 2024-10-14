import { View } from "./views.js";
export class MensagemView extends View {
    template(model) {
        const ultimaNegociacao = model.listar().slice(-1)[0];
        return `
            <p class="alert alert-info"><strong>Nova Negociação adicionada com sucesso:</strong><br>${ultimaNegociacao.toString()}</p>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
