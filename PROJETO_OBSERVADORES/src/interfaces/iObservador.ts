import Observavel from '../contadores/Observavel';
interface iObservador {
    update(obs: Observavel): void;
}

export default iObservador;