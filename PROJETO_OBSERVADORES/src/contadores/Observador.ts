import iObservador from "../interfaces/iObservador";
import Observavel from "./Observavel";


class Observador implements iObservador {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  update(obs: Observavel): void {
    console.log(`Observador ${this.id} foi notificado`);
    console.log(`Contando todas as palavras: ${obs.obterNumeroDePalavras()}`);
    console.log(`Contando palavras pares: ${obs.obterNumeroPares()}`);
    console.log(`Contando palavras maiúsculas: ${obs.obterNumeroPalavrasMaiusculas()}`);
    console.log('Observador atualizado');
  }
}

export default Observador;
