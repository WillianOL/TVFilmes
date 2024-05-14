import React from 'react';
import Titulo from '../Titulo/Titulo';
import { GET_POPULARES } from '../../../api/api';
import useFetch from '../../../hooks/useFetch';
import style from './style.module.scss';
import CarrosselDeItens from '../CarrosselDeItens/CarrosselDeItens';

const Populares = () => {
  const [plataforma, setPlataforma] = React.useState('tv');
  const { loading, dados, requisicao } = useFetch();


  React.useEffect(() => {
    const { url, options } = GET_POPULARES(plataforma);
    requisicao(url, options);
  }, [plataforma, requisicao]);

  return (
    <section className={style.popularesConteiner}>
      <nav className={style.tituloESeletores}>
        <Titulo>Populares</Titulo>
        <ul className={style.seletores}>
          <li
            onClick={() => setPlataforma('tv')}
            className={plataforma === 'tv' ? style.selecionado : ''}
          >
            Series
          </li>
          <li
            onClick={() => setPlataforma('movie')}
            className={plataforma === 'movie' ? style.selecionado : ''}
          >
            Filmes
          </li>
        </ul>
      </nav>
      {dados && <CarrosselDeItens dados={dados} loading={loading}/>} 
    </section>
  );
};

export default Populares;
