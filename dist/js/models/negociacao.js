export class Negociacao {
    static conversorDeParametros(data, quantidade, valor) {
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
        const data = new Date(this._data.getTime());
        return data;
    }
    get data_formatada() {
        const data_formatada = (this._data.getDay() + "/" + this._data.getMonth() + "/" + this._data.getFullYear());
        return data_formatada;
    }
    paraTexto() {
        return `Data: ${this.data_formatada} - Quantidade: ${this.quantidade} - Valor: R$${this.valor} - paraTexto()`;
    }
}
