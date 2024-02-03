import Restaurante from "./assets/hashtaurante.jpeg";
import "./App.css";
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

export function App() {
  return (
    <>
      <img className="capa" src={Restaurante} alt="Imagem de um restaurante" />
      <Navegacao />
      <div className="menu">
        {pratosPrincipais.map((item) => (
          <ItemCardapio
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}

