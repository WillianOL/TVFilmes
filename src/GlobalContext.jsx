import React from 'react';

export const UserContext = React.createContext();

export const GlobalContext = ({ children }) => {
  const [modalFavoritos, setModalFavoritos] = React.useState(false);
  const [errorPesquisa, setErrorPesquisa] = React.useState(null);
  const [resultadoPesquisa, setResultadoPesquisa] = React.useState(null);

  const [favoritos, setFavoritos] = React.useState(() => {
    return JSON.parse(localStorage.getItem('filmesFavoritos')) || [];
  });

  React.useEffect(() => {
    localStorage.setItem('filmesFavoritos', JSON.stringify(favoritos))
  }, [favoritos])

  function adicionarFavoritos(dados) {
    const itemAdicionado = favoritos.find(item => (dados.title || dados.name) === (item.name || item.title))
    if(itemAdicionado) {
      deletarFavoritos(itemAdicionado)
      return
    }
    setFavoritos([...favoritos, dados])
  }

  function deletarFavoritos(dado) {
    const filtroItemDeletado = favoritos.filter(item => (item.title || item.name) !== (dado.title || dado.name))
    setFavoritos(filtroItemDeletado)
  }

  return (
    <UserContext.Provider
      value={{
        setFavoritos,
        favoritos,
        modalFavoritos,
        setModalFavoritos,
        errorPesquisa,
        setErrorPesquisa,
        resultadoPesquisa,
        setResultadoPesquisa,
        adicionarFavoritos,
        deletarFavoritos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
