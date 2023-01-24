import filter from "../../assets/filter.svg";
import "./styles.css";
import "../../pages/global.css";
import { useState } from "react";

export default function Filter({ handleSortMovies, handleFilterMovies }) {
  const [hidden, setHidden] = useState(true);

  function handleFilter() {
    setHidden(!hidden);
  }

  return (
    <div className="filter">
      <img src={filter} alt="Filtro" onClick={() => handleFilter()} />
      <div className={`filtered ${hidden && "hidden"}`}>
        <span
          onClick={() => {
            handleSortMovies("nome");
            handleFilter();
          }}
        >
          Nome
        </span>
        <span
          onClick={() => {
            handleSortMovies("ano");
            handleFilter();
          }}
        >
          Ano de Lançamento
        </span>
        <span
          onClick={() => {
            handleSortMovies("pais");
            handleFilter();
          }}
        >
          País
        </span>
      </div>
    </div>
  );
}
