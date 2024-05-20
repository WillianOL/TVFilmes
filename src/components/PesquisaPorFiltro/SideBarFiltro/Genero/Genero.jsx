import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import { GET_GENERO } from '../../../../api/api';
import style from './style.module.scss';

const Genero = ({ genero, setGenero }) => {
  const { requisicao, dados } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_GENERO();
    requisicao(url, options);
  }, [requisicao]);

  function adicionarGenero({ target }) {
    const selecionado = genero.includes(target.id);
    if (selecionado) {
      const filtroItem = genero.filter((genero) => genero === target.id);
      const filtroItensSelecionados = genero.filter(
        (item) => item !== filtroItem[0]
      );
      setGenero([...filtroItensSelecionados]);
    } else {
      setGenero([...genero, target.id]);
    }
  }
  console.log(genero);

  return (
    <div className={style.generoConteiner}>
      <h3>Gênero</h3>
      <ul className={style.generos}>
        {dados &&
          dados.genres.map((item) => {
            return (
              <li
                key={item.id}
                onClick={adicionarGenero}
                id={item.id}
                className={
                  style.generoItem +
                  ' ' +
                  (genero.includes(String(item.id)) ? style.selecionado : '')
                }
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Genero;
