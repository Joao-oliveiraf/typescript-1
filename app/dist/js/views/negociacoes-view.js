import { View } from "./views.js";
export class NegociacoesView extends View {
    template(model) {
        var _a;
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${(_a = model.listar()) === null || _a === void 0 ? void 0 : _a.map(negociacao => {
            return `
                <tr>
                    <td>${this.formatar_data(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>`;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    formatar_data(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
