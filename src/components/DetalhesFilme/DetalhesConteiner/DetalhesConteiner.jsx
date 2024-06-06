import React from 'react';
import BannerFilme from '../BannerFilme/BannerFilme';
import AtoresDoFilme from '../AtoresDoFilme/AtoresDoFilme';
import Recomendacoes from '../Recomendacoes/Recomendacoes';

const DetalhesConteiner = ({dados, loading}) => {
  console.log(dados.credits.cast === true);
  return (
    <main style={{gap: '50px'}}>
      <BannerFilme dados={dados} loading={loading} />
      {dados.credits.cast && <AtoresDoFilme dados={dados.credits.cast} loading={loading}/>}
      <Recomendacoes dados={dados.recommendations} loading={loading} />
    </main>
  );
};

export default DetalhesConteiner;
