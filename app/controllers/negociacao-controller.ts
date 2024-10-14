import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
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
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adicionar(): void {
        /**
         * Cria negociação;
         * Atualização a view de negociacoes;
         * Atualiza a view de mensagens de confirmação.
         */
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(this.negociacoes);
        this.limparForm();
    }

    criaNegociacao(): Negociacao {
        /**
         * Utiliza os valores dos inputs HTML para criar um objeto de negociação.
         * Tratamento dos dados provinientes dos inputs
         * @returns Objeto de Negociacao()
         */
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, (',')));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparForm(): void {
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