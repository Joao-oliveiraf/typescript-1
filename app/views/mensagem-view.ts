import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./views.js";


export class MensagemView extends View<string> {

    protected template(model: string): string {
        
        return `<p class="alert alert-info"><strong></strong><br>
            ${model}</p>`;
    }

}   
