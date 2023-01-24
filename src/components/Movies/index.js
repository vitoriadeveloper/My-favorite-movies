import "./styles.css";
import "../../pages/global.css";

export default function Movies({ item }) {
  return (
    <div className="container-fav-movies">
      <img src={item.imagem} alt = 'Imagem do filme'/>
      <h1>{item.nome}</h1>
      <span>
        <strong>Categoria</strong>: {item.categoria}
      </span>
      <span>
        <strong>Diretor</strong>: {item.diretor}
      </span>
      <span>
        {" "}
        <strong>Ano de Lançamento</strong>: {item.ano}
      </span>
    </div>
  );
}
