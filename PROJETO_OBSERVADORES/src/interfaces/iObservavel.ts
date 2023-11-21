import Observador from "../contadores/Observador";

interface iObservavel {

  adicionarObservador(obs: Observador): void;

	removeObservador(obs: Observador): void;
  
	notificaObservadores(): void ;
  }

  export default iObservavel;