import "./global.css";
import Aside from "../components/Aside";
import Movies from "../components/Movies";
import cards from "../cards";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";

function Main() {
  const [movies, setMovies] = useState([...cards]);
  const [filterMovies, setFilterMovies] = useState([...cards]);
  function handleFilterMovies(category) {
    if (category === null) {
      setFilterMovies(movies);
    } else {
      const moviesFiltered = movies.filter(
        (item) => item.categoria === category
      );
      setFilterMovies(moviesFiltered);
    }
  }
  function handleSortMovies(typeOfFilter) {
    const newMovies = movies;
    const order = newMovies.sort(function (a, b) {
      if (typeOfFilter === "nome") {
        return a.nome.localeCompare(b.nome);
      }
      
      if (typeOfFilter === "pais") {
        return a.pais.localeCompare(b.pais);
      }

      if (typeOfFilter === "ano") {
        return b.ano - a.ano;
      }
    });
    setFilterMovies(order);
  }
  useEffect(()=>{
    console.log('filterMovies', filterMovies);
    console.log('movies', movies);
}, [handleSortMovies])
  return (
    <div className="container">
      <Aside handleFilterMovies={handleFilterMovies} />
      <div className="container-movies">
        {filterMovies.map((item) => (
          <Movies key={item.id} item={item} />
        ))}
      </div>
      <Filter handleSortMovies={handleSortMovies} />
    </div>
  );
}

export default Main;
