import Restaurante from "./assets/hashtaurante.jpeg";
import "./App.css";
import { Navegacao } from "./Navegacao";

export function App() {
  return (
    <>
      <img className="capa" src={Restaurante} alt="Imagem de um restaurante" />
      <Navegacao />
    </>
  );
}

