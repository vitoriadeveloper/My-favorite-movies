import filter from "../../assets/filter.svg";
import "./styles.css";
import "../../pages/global.css";
import { useState } from "react";

export default function Filter({ handleSortMovies, handleFilterMovies }) {
  const [hidden, setHidden] = useState("hidden");

  function handleFilter() {
    setHidden("");
  }
  return (
    <div className="filter">
      <img src={filter} alt="Filtro" onClick={() => handleFilter()} />
      <div className={`filtered ${hidden}`}>
        <span onClick={() => handleSortMovies("nome")}>Nome</span>
        <span onClick={() => handleSortMovies("ano")}>Ano de Lançamento</span>
        <span onClick={() => handleSortMovies("pais")}>País</span>
      </div>
    </div>
  );
}
