import React from 'react';
import Item from './Item/Item';
import Loading from '../../../helper/Loading/Loading';
import style from './style.module.scss';

const CarrosselAtores = ({ dados, loading }) => {
  const atoresMaximo = dados.results.slice(0, 15);

  return (
    <div className={style.conteiner}>
      <ul className={style.carrosselAtores}>
        {loading && <Loading />}
        {atoresMaximo.map((ator) => (
          <Item ator={ator} />
        ))}
      </ul>
    </div>
  );
};

export default CarrosselAtores;
