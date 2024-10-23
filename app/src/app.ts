import NegociacaoController from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log(controller.adicionar());
    });
}else {
    throw Error('Verifique a existência do form!')
}

