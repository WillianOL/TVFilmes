import React from 'react';
import SelecionarGenero from './SelecionarGenero/SelecionarGenero';
import style from './style.module.scss'

const BarraDeFiltro = ({ type }) => {
  const [genero, setGenero] = React.useState([]);
  const [ano, setAno] = React.useState('');
  const [palavra, setPalavra] = React.useState('');

  return (
    <section className={style.barraDeFiltro}>
      <h2 className={style.titulo}>Filros</h2>
      <SelecionarGenero type={type} genero={genero} setGenero={setGenero}/>
    </section>
  );
};

export default BarraDeFiltro;
