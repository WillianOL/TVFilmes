import React from 'react';
import Banner from '../../Banner/Banner';
import Atores from '../../Atores/Atores';
import Recomendacoes from '../../Recomendacoes/Recomendacoes';
import UltimaTemporada from './UltimaTemporada/UltimaTemporada';

const DetalhesConteiner = ({ dados, loading }) => {
  return (
    <main style={{gap: '50px'}}>
      <Banner dados={dados} loading={loading}/>
      <Atores dados={dados.credits} loading={loading}/>
      <UltimaTemporada dados={dados} loading={loading} />
      <Recomendacoes dados={dados.recommendations} loading={loading}/>
    </main>
  );
};

export default DetalhesConteiner;
