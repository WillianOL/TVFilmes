import React from 'react';
import Banner from '../../Banner/Banner';
import Atores from '../../Atores/Atores';
import Recomendacoes from '../../Recomendacoes/Recomendacoes';

const DetalhesConteiner = ({ dados, loading }) => {
  return (
    <main style={{gap: '50px'}}>
      <Banner dados={dados} loading={loading}/>
      <Atores dados={dados.credits} loading={loading}/>
      <Recomendacoes dados={dados.recommendations} loading={loading}/>
    </main>
  );
};

export default DetalhesConteiner;
