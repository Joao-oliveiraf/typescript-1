export class Negociacao {
    /*private _data: Date;
    private _quantidade: number;
    private _valor: number;*/
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
}
