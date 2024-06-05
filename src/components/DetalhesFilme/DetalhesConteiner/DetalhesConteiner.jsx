import React from 'react';
import BannerFilme from '../BannerFilme/BannerFilme';
import AtoresDoFilme from '../AtoresDoFilme/AtoresDoFilme';

const DetalhesConteiner = ({dados, loading}) => {
  return (
    <main style={{gap: '30px'}}>
      <BannerFilme dados={dados} loading={loading} />
      <AtoresDoFilme dados={dados.credits.cast} loading={loading} />
    </main>
  );
};

export default DetalhesConteiner;
