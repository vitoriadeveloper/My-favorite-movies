import './styles.css'
import '../../pages/global.css'
import Category from '../../assets/category.svg'

function Aside() {
  return (
    <div className="container-aside">
      <div className="column-aside">
        <div>
          <aside>
            <img src={Category} alt="Simbolo de Categoria" />
            <h1>Categorias</h1>
          </aside>
          <section className="movies-column">
            <p>Comédia</p>
            <p>Ficção Científica</p>
            <p>Fantasia</p>
            <p>Suspense</p>
            <p>Drama</p>
          </section>
         
        </div>
        <button className="btn-all">Todos</button>
      </div>
    </div>
  );
}

export default Aside;
