import React from 'react';
import SelecionarGenero from './SelecionarGenero/SelecionarGenero';
import style from './style.module.scss';
import SelecionarAno from './SelecionarAno/SelecionarAno';
import PalavraChave from './PalavraChave/PalavraChave';
import ButtonSubmit from './ButtonSubmit/ButtonSubmit';

const BarraDeFiltro = ({ type, setResultadoFiltro }) => {
  const [genero, setGenero] = React.useState([]);
  const [ano, setAno] = React.useState('');
  const [palavra, setPalavra] = React.useState('');
  const [keyword, setKeyword] = React.useState('')

  return (
    <section className={style.barraDeFiltro}>
      <h2 className={style.titulo}>Filtros</h2>
      <SelecionarGenero type={type} genero={genero} setGenero={setGenero} />
      <SelecionarAno ano={ano} setAno={setAno} />
      <PalavraChave palavra={palavra} setPalavra={setPalavra} setKeyword={setKeyword}/>
      <ButtonSubmit estados={{ genero, ano, keyword }} setResultadoFiltro={setResultadoFiltro} />
    </section>
  );
};

export default BarraDeFiltro;
