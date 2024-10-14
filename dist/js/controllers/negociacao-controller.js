import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        // const data_test = new Date(negociacao.data)
        const data_string_day = negociacao.data.getDate().toString();
        const data_string_month = negociacao.data.getMonth().toString();
        const data_string_year = negociacao.data.getFullYear().toString();
        console.log(data_string_day + '/' + data_string_month + '/' + data_string_year);
        this.negociacoes.adicionar(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparForm();
    }
    criaNegociacao() {
        /**
         * Utiliza os valores dos inputs HTML para criar um objeto de negociação.
         * Tratamento dos dados provinientes dos inputs
         * @returns Objeto de Negociacao()
         */
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, (',')));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparForm() {
        /**
         * Limpa o formulário após um cadastro de Negociacao()
         * A classe previne o comportamento do refresh da página
         * Esse metódo garante que os inputs estarão limpos após um cadastro.
         */
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputQuantidade.placeholder = 'Quantidade de negociações';
        this.inputValor.value = '';
        this.inputValor.placeholder = 'Valor da negociação';
        this.inputData.focus();
    }
}
