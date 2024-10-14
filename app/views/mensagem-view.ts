import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./views.js";


export class MensagemView extends View<Negociacoes> {

    template(model: Negociacoes): string {
        const ultimaNegociacao = model.listar().slice(-1)[0];
        return `
            <p class="alert alert-info"><strong>Nova negociação adicionada com sucesso:</strong><br>
            ${ultimaNegociacao.toString()}</p>
        `;

    }
}   
