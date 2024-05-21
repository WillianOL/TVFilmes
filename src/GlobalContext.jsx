import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const GlobalContext = ({ children }) => {
  const [activeBarraPesquisa, setActiveBarraPesquisa] = React.useState(false);
  const [modalFavoritos, setModalFavoritos] = React.useState(false);
  const [errorPesquisa, setErrorPesquisa] = React.useState(null);

  const [numFavoritos, setNumFavoritos] = React.useState(() => {
    return localStorage.getItem('filmesFavoritos') || 0;
  });

  const navigate = useNavigate()
  function pesquisar(valorPesquisa) {
    if (valorPesquisa === '') {
      setErrorPesquisa('Digite algo para realizar a pesquisa');
    } else {
      navigate('/resultadoPesquisa')
      setErrorPesquisa(null)
    }
  }

  return (
    <UserContext.Provider
      value={{
        activeBarraPesquisa,
        setActiveBarraPesquisa,
        numFavoritos,
        setNumFavoritos,
        modalFavoritos,
        setModalFavoritos,
        pesquisar,
        errorPesquisa,
        setErrorPesquisa
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
