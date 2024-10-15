export class Negociacao {
    /**
     * Model que define uma negociacao
     *
     * @param _data - Data da operacao
     * @param quantidade - Quantidade de operacoes
     * @param valor - Valor da(s) operacao(oes)
     */
    static conversorDeParametros(data, quantidade, valor) {
        /**
         * Trata os dados de inputs para criar um objeto de negociação.
         * @params - document.querySelector(#HTMLElement).value
         * @returns Objeto de Negociacao()
         */
        const exp = /-/g;
        const dataNegociacao = new Date(data.replace(exp, (',')));
        const quantidadeNegociacao = parseInt(quantidade);
        const valorNegociacao = parseFloat(valor);
        return new Negociacao(dataNegociacao, quantidadeNegociacao, valorNegociacao);
    }
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return (this.quantidade * this.valor);
    }
    get data() {
        const data = new Date(this._data.getTime()); // Impedindo alteração de state
        return data;
    }
    get data_formatada() {
        const data_formatada = (this._data.getDay() + "/" + this._data.getMonth() + "/" + this._data.getFullYear());
        return data_formatada;
    }
    toString() {
        return `Data: ${this.data_formatada} - Quantidade: ${this.quantidade} - Valor: R$${this.valor}`;
    }
}
