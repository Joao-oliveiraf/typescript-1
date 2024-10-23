import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView', true);
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.conversorDeParametros(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.isWeekDay(negociacao.data)) {
            this.negociacoes.adicionar(negociacao);
            this.limparForm();
            this.atualiza_view();
            return;
        }
        this.mensagemView.update('Negociacoes somente em dias uteis');
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputQuantidade.placeholder = 'Quantidade de negociações';
        this.inputValor.value = '';
        this.inputValor.placeholder = 'Valor da negociação';
        this.inputData.focus();
    }
    atualiza_view() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Nova negociacao adicionada');
    }
    isWeekDay(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
