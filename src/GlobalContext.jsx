import React from 'react';

export const UserContext = React.createContext();

export const GlobalContext = ({ children }) => {
  const [barraPesquisa, setBarraPesquisa] = React.useState(false);
  const [modalFavoritos, setModalFavoritos] = React.useState(false);
  const [numFavoritos, setNumFavoritos] = React.useState(() => {
    return localStorage.getItem('filmesFavoritos') || 0;
  });

  return (
    <UserContext.Provider
      value={{
        barraPesquisa,
        setBarraPesquisa,
        numFavoritos,
        setNumFavoritos,
        modalFavoritos,
        setModalFavoritos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
