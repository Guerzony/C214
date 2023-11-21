import Observador from "./contadores/Observador";
import Observavel from "./contadores/Observavel";


const observador1 = new Observador(1);
const observador2 = new Observador(2);

const observavel = new Observavel();

observavel.adicionarObservador(observador1);
observavel.adicionarObservador(observador2);

observavel.setFrase("Um exemplo de frase muito boa");

console.log(observavel.notificarObservadores());