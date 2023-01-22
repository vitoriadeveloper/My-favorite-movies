
import './global.css'
import Aside from "../components/Aside";
import Movies from '../components/Movies';
import cards from '../cards';
import { useState } from 'react';
import Filter from '../components/Filter';

function Main() {
  const [movies, setMovies] = useState([...cards]);
  return (
    <div className="container">
     <Aside/>
     <div className="container-movies">
        {cards.map((item) => (
          <Movies key={item.id} item={item} />
        ))}
      </div>
      <Filter/>
    </div>
     
  );
}

export default Main;
