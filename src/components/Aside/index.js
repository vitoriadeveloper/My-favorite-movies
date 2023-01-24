import "./styles.css";
import "../../pages/global.css";
import Category from "../../assets/category.svg";

function Aside({ handleFilterMovies }) {
  return (
    <div className="container-aside">
      <div className="column-aside">
        <div>
          <aside>
            <img src={Category} alt="Simbolo de Categoria" />
            <h1>Categorias</h1>
          </aside>
          <section className="movies-column">
            <p onClick={() => handleFilterMovies("Comedia")}>Comédia</p>
            <p onClick={() => handleFilterMovies("Ficcao Cientifica")}>
              Ficção Científica
            </p>
            <p onClick={() => handleFilterMovies("Fantasia")}>Fantasia</p>
            <p onClick={() => handleFilterMovies("Suspense")}>Suspense</p>
            <p onClick={() => handleFilterMovies("Drama")}>Drama</p>
          </section>
        </div>
        <button className="btn-all" onClick={() => handleFilterMovies(null)}>
          Todos
        </button>
      </div>
    </div>
  );
}

export default Aside;
