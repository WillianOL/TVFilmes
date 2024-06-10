import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { GET_DETALHES_ATOR } from '../../api/api';
import FotoEBiografia from './FotoEBiografia/FotoEBiografia';
import PersonagensEDados from './PersonagensEDados/PersonagensEDados';

const DetalhesAtor = () => {
  const { dados, requisicao, error, loading } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    const { url, options } = GET_DETALHES_ATOR(id);
    requisicao(url, options);
  }, [requisicao, id]);

  if(error) return <p>Ocorreu um erro inesperado, volte ao inicio</p>
  if(dados)
  return (
    <main style={{alignItems: 'center', gap: '20px'}}>
      <FotoEBiografia dados={dados} loading={loading}/>
      <PersonagensEDados dados={dados} loading={loading}/>
    </main>
  );
};

export default DetalhesAtor;
