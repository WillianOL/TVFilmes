import React from 'react';
import Titulo from '../Titulo/Titulo';
import Seletores from '../Seletores/Seletores';
import Seletor from '../Seletores/Seletor';
import useFetch from '../../../hooks/useFetch';
import { GET_TRENDING } from '../../../api/api';
import CarrosselDeItens from '../CarrosselDeItens/CarrosselDeItens';
import style from './style.module.scss'

const DestaquesDoMomento = () => {
  const [intervalo, setIntervalo] = React.useState('day');
  const {loading, requisicao, dados} = useFetch()

  React.useEffect(() => {
    const {url, options} = GET_TRENDING(intervalo)
    requisicao(url, options)
  }, [intervalo, requisicao])

  return (
    <section className={style.destaqueConteiner}>
      <nav className={style.destaqueSeletores}>
        <Titulo>Destaques</Titulo>
        <Seletores>
          <Seletor
            onClick={() => setIntervalo('day')}
            className={intervalo === 'day' ? 'selecionado' : ''}
          >
            Do dia
          </Seletor>
          <Seletor
            onClick={() => setIntervalo('week')}
            className={intervalo === 'week' ? 'selecionado' : ''}
          >
            Da semana
          </Seletor>
        </Seletores>
      </nav>

      {dados && <CarrosselDeItens dados={dados} loading={loading}/>}
    </section>
  );
};

export default DestaquesDoMomento;
