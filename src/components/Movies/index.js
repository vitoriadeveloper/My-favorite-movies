import './styles.css';
import '../../pages/global.css';

export default function Movies({item}) {
    return (
      <div className='container-fav-movies'>
        <img src={item.image}/>
        <h1>{item.name}</h1>
        <span>Categoria: {item.categoria}</span>
        <span>Diretor: {item.diretor}</span>
        <span> Ano de Lançamento: {item.ano}</span> 
      </div>
    );
  }
  

  