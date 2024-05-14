import React from 'react';

const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const requisicao = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (erro) {
      json = null;
      setError(erro.message);
    } finally {
      setLoading(false);
      setDados(json);
    }
  }, []);

  return {
    dados,
    error,
    loading,
    requisicao,
  };
};

export default useFetch;
