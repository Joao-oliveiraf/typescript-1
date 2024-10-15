import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', false);
        this.mensagemView = new MensagemView('#mensagemView', true);
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        /**
         * Cria negociação;
         * Atualização a view de negociacoes;
         * Atualiza a view de mensagens de confirmação ou erros.
         */
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
    atualiza_view() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Nova negociacao adicionada');
    }
    isWeekDay(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
