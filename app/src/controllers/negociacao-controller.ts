import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export default class NegociacaoController {
    /**
     * Constroi objetos de Negociacoes(), extraindo dados dos inputs front-end.
     * Atualiza a <table/> das negociações, chamando a NegociacoesView()
     * Renderiza mensagens de confirmação da MensagensView()
     * @adicionar - Chama os metodos internos criaNegociacao() e limpaForm().
     * @criaNegociacao - Utiliza os valores dos inputs HTML para criar um objeto de negociação.
     * @limparForm - Limpa o formulário após o submit de um cadastro.
     */
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();
    

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }
    @logarTempoDeExecucao()
    public adicionar(): void {
        /**
         * Cria negociação;
         * Atualização a view de negociacoes;
         * Atualiza a view de mensagens de confirmação ou erros.
         */
        const negociacao = Negociacao.conversorDeParametros(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (this.isWeekDay(negociacao.data)) {
            this.negociacoes.adicionar(negociacao);
            this.limparForm();
            this.atualiza_view();
            return ;
        } 
        this.mensagemView.update('Negociacoes somente em dias uteis')

    }
    public importaDados(): void {
        this.negociacoesService.obterNegociacoesDoDia()
        .then(negociacoesDeHoje => { // Add na array de NegociacaoController.negociacoes
            negociacoesDeHoje.forEach(negociacao => {
                this.negociacoes.adicionar(negociacao)
            });
            this.negociacoesView.update(this.negociacoes) // Utilizando o metodo listar(), atualiza a view com todas as negociacoes
        });
    }
    private limparForm(): void {
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
    private atualiza_view(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Nova negociacao adicionada');
    }
    private isWeekDay(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}