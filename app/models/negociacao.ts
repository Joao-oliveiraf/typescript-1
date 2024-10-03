export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._valor = valor;
        this._quantidade = quantidade;
    }

    get valor() {
        return this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get volume() {
        return (this._quantidade * this._valor)
    }
}