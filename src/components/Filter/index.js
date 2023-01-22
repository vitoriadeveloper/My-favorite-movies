import filter from '../../assets/filter.svg'
import './styles.css'
import '../../pages/global.css';
import { useRef } from 'react';


export default function Filter() {
  
const movieName = useRef(null);
const movieYear = useRef(null);
const movieCountry = useRef(null);
const filtered = useRef(null);

function handleFilter(){
 filtered.current.remove('hidden');

}
    return (
      <div className='filter'>
        <img 
        src={filter} 
        alt = 'Filtro'
        onClick={()=> handleFilter()}
        />
        <div className='filtered hidden' ref={filtered}>
        <span id='movie-name' ref={movieName}>Nome</span>
        <span id='movie-year' ref={movieYear}>Ano de Lançamento</span>
        <span id='movie-country' ref={movieCountry}>País</span>
        </div>
      </div>
    );
  }
  