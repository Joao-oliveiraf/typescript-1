import { View } from "./views.js";
export class MensagemView extends View {
    template(model) {
        const ultimaNegociacao = model.listar().slice(-1)[0];
        return `
            <p class="alert alert-info"><strong>Nova negociação adicionada com sucesso:</strong><br>
            ${ultimaNegociacao.toString()}</p>
        `;
    }
}
