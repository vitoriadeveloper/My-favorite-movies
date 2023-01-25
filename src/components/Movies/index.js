import "./styles.css";
import "../../pages/global.css";


export default function Movies({ item, setCurrentImage, setCurrentDescription, setHidden }) {

  function handleOpenModal(){
    console.log('oi');
     setHidden(false)
     setCurrentImage(item.imagem)
     setCurrentDescription(item.descricao)
  };
  return (
    <div className="container-fav-movies">
      <img src={item.imagem} alt = 'Imagem do filme' onClick={handleOpenModal}/>
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
