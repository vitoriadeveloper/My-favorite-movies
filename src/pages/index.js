import "./global.css";
import Aside from "../components/Aside";
import Movies from "../components/Movies";
import cards from "../cards";
import { useState } from "react";
import Filter from "../components/Filter";
import Modal from "../components/Modal";

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
    const newMovies = [...movies];
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
  const [modalHidden, setHidden] = useState(true);

  const [currentImage, setCurrentImage] = useState("");
  const [description, setCurrentDescription] = useState("");

  return (
    <div className="container">
      <Aside handleFilterMovies={handleFilterMovies} />
      <div className="container-movies">
        {filterMovies.map((item) => (
          <Movies
            key={item.id}
            item={item}
            setCurrentImage={setCurrentImage}
            setCurrentDescription={setCurrentDescription}
            setHidden={setHidden}
          />
        ))}
      </div>
      <Filter handleSortMovies={handleSortMovies} />
      {modalHidden === false && (
        <div className="modal hidden-modal">
          <Modal
            currentImage={currentImage}
            description={description}
            setHidden={setHidden}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
