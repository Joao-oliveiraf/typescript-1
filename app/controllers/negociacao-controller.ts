import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export default class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adicionar(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionar(negociacao);
        console.log(this.negociacoes.listar());
        this.limparForm();
    }

    criaNegociacao(): Negociacao {
        
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, (',')));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparForm(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputQuantidade.placeholder = 'Quantidade de negociações';
        this.inputValor.value = '';
        this.inputValor.placeholder = 'Valor da negociação';
        this.inputData.focus();
    }
}