export class Negociacao {
    /*private _data: Date;
    private _quantidade: number;
    private _valor: number;*/

    constructor(
        private readonly _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number {
        return (this.quantidade * this.valor);
    }

    get data() {
        const data = new Date(this._data.getTime()); // Impedindo alteração de state
        return data;
    }

    get data_formatada(){
        const data_formatada = (this._data.getDay() + "/" + this._data.getMonth() + "/" + this._data.getFullYear());
        return data_formatada
    }

    toString() {
        return `Data: ${this.data_formatada} - Quantidade: ${this.quantidade} - Valor: R$${this.valor}`;
    }
}