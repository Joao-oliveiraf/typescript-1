import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js"
import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")// Acessa o endpoint
        .then(res => res.json())// Converte a response em um JSON
        .then((dados: NegociacaoDoDia[]) => { // Uso de interface para tipar os dados
            return dados.map(dadosDeHoje => {
                return new Negociacao( // retorna uma array de Negociacoes() criadas a partir dos dados do JSON
                    new Date(),
                    dadosDeHoje.vezes,
                    dadosDeHoje.montante
                )
            })
        });
    }
}