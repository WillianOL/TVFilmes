import React from 'react';
import Titulo from '../Titulo/Titulo';
import { GET_POPULARES } from '../../../api/api';
import useFetch from '../../../hooks/useFetch';
import style from './style.module.scss';
import CarrosselDeItens from '../CarrosselDeItens/CarrosselDeItens';
import Seletores from '../Seletores/Seletores';
import Seletor from '../Seletores/Seletor';

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
        <Seletores>
          <Seletor
            onClick={() => setPlataforma('tv')}
            className={plataforma === 'tv' ? 'selecionado' : ''}
          >
            Series
          </Seletor>
          <Seletor
            onClick={() => setPlataforma('movie')}
            className={plataforma === 'movie' ? 'selecionado' : ''}
          >
            Filmes
          </Seletor>
        </Seletores>
      </nav>
      {dados && (
        <CarrosselDeItens dados={dados} loading={loading} />
      )}
    </section>
  );
};

export default Populares;
