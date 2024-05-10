import React from 'react';
import BarraPesquisa from '../../BarraPesquisa/BarraPesquisa';
import style from './style.module.scss';
import imagemBanner from '../../../imgs/banner/img_banner.png';

const BannerPesquisa = () => {
  return (
    <section className={style.conteinerBanner}>
      <div className={style.textoEPesquisabanner}>
        <p className={style.texto}>
          <span>Diversão</span>
          Garantida
          <span>Cinema</span>
          Sem limites!
        </p>
        <BarraPesquisa />
      </div>
      <div className={style.imgBanner}>
        <img src={imagemBanner} alt="Imagem do banner/landinpage do site" />
      </div>
    </section>
  );
};

export default BannerPesquisa;
