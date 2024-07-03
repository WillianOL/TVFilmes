import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const GlobalContext = ({ children }) => {
  const [activeBarraPesquisa, setActiveBarraPesquisa] = React.useState(false);
  const [modalFavoritos, setModalFavoritos] = React.useState(false);
  const [errorPesquisa, setErrorPesquisa] = React.useState(null);
  const [valorPesquisa, setValorPesquisa] = React.useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = React.useState(null);

  const [favoritos, setFavoritos] = React.useState(() => {
    return JSON.parse(localStorage.getItem('filmesFavoritos')) || [];
  });
  const [favoritoErro ,setFavoritoErro] = React.useState(null)

  React.useEffect(() => {
    localStorage.setItem('filmesFavoritos', JSON.stringify(favoritos))
  }, [favoritos])

  function adicionarFavoritos(dados) {
    const itemAdicionado = favoritos.find(item => (dados.title || dados.name) === (item.name || item.title))
    if(itemAdicionado) {
      setFavoritoErro('Item já adicionado aos favoritos!')
      setTimeout(() => {
        setFavoritoErro(null)
      }, 3000)
      return
    }
    setFavoritos([...favoritos, dados])
    setFavoritoErro(null)
  }

  function deletarFavoritos(dado) {
    const filtroItemDeletado = favoritos.filter(item => (item.title || item.name) !== (dado.title || dado.name))
    setFavoritos(filtroItemDeletado)
  }

  const navigate = useNavigate();
  function pesquisar(valorPesquisa) {
    if (valorPesquisa === '') {
      setErrorPesquisa('Digite algo para realizar a pesquisa');
    } else {
      navigate('/resultadoPesquisa');
      setValorPesquisa(valorPesquisa);
      setErrorPesquisa(null);
    }
  }

  return (
    <UserContext.Provider
      value={{
        activeBarraPesquisa,
        setActiveBarraPesquisa,
        setFavoritos,
        favoritos,
        modalFavoritos,
        setModalFavoritos,
        pesquisar,
        errorPesquisa,
        setErrorPesquisa,
        valorPesquisa,
        resultadoPesquisa,
        setResultadoPesquisa,
        adicionarFavoritos,
        favoritoErro,
        deletarFavoritos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
