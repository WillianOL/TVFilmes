import React from 'react';
import style from './style.module.scss'
import Genero from './Genero/Genero';

const SideBarFiltro = () => {
  const [genero, setGenero] = React.useState([])

  return (
    <aside className={style.filtroConteiner}>
      <h2>Filtros</h2>
      <Genero genero={genero} setGenero={setGenero} />
    </aside>
  );
};

export default SideBarFiltro;
