import { Negociacao } from "./models/negociacao.js";

const bussines = new Negociacao(new Date(), 10, 100);
console.log(bussines.valor)
console.log(bussines.volume)


