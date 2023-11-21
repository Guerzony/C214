import Observador from "./Observador";
import iObservavel from "../interfaces/iObservavel";

  class Observavel {
    private frase: string = "";
    private observadores: Observador[] = [];
  
    adicionarObservador(obs: Observador): void {
      this.observadores.push(obs);
      console.log('Observador adicionado!');
    }
  
    removerObservador(obs: Observador): void {
      const index = this.observadores.indexOf(obs);
      if (index !== -1) {
        this.observadores.splice(index, 1);
        console.log('Observador removido!');
      } else {
        console.log('Observador não encontrado.');
      }
    }
  
    notificarObservadores(){
        for (const observador of this.observadores) {
            observador.update(this);
        }
        return 'Observadores notificados!';
    }
    obterNumeroDePalavras(): number {
      const palavras = this.frase.split(" ");
      return palavras.length;
    }
  
    obterNumeroPares(): number {
      return this.frase.split(" ").filter(palavra => palavra.length % 2 === 0).length;
    }
  
    obterNumeroPalavrasMaiusculas(): number {
      return this.frase.split(" ").filter(palavra => palavra[0] === palavra[0].toUpperCase()).length;
    }
  
    getFrase(): string {
      return this.frase;
    }
  
    setFrase(frase: string): void {
      this.frase = frase;
    }
  
    getObservadores(): Observador[] {
      return this.observadores;
    }
  
    setObservadores(obs: Observador[]): void {
      this.observadores = obs;
    }
  }
  
  export default Observavel;
  
