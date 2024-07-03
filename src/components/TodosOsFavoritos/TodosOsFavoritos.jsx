import React from 'react';
import { UserContext } from '../../GlobalContext';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegSadCry } from "react-icons/fa";
import style from './style.module.scss';

const TodosOsFavoritos = () => {
  const { favoritos, deletarFavoritos } = React.useContext(UserContext);

  return (
    <main>
      <section className={style.conteiner}>
        <h1 className={style.titulo}>Todos Os Favoritos</h1>
        <div className={style.itensConteiner}>
          {favoritos.length === 0 && (
            <p className={style.frase}>
              <FaRegSadCry />
              Você não possui filmes ou séries favoritos, adicione-os para
              visualizá-los aqui.
            </p>
          )}
          {favoritos &&
            favoritos.map((item) => {
              return (
                <div key={item.id} className={style.itemConteiner}>
                  <Link to={`/${item.seasons ? 'tv' : 'movie'}/${item.id}`}>
                    <div
                      className={style.imgConteiner}
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
                      }}
                    ></div>
                    <div className={style.informacoes}>
                      <h2>{item.name || item.title}</h2>
                      <p>{`"${item.tagline}"`}</p>
                      <p>{item.overview}</p>
                    </div>
                  </Link>
                  <button
                    className={style.buttonDelete}
                    onClick={() => deletarFavoritos(item)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default TodosOsFavoritos;
