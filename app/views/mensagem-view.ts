import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./views.js";


export class MensagemView extends View{

    template(model: Negociacoes): string {
        const ultimaNegociacao = model.listar().slice(-1)[0];
        return `
            <p class="alert alert-info"><strong>Nova Negociação adicionada com sucesso:</strong><br>${ultimaNegociacao.toString()}</p>
        `;

    }
    update(model: Negociacoes): void {
        const template = this.template(model)
        this.element.innerHTML = template;
    }
}   
