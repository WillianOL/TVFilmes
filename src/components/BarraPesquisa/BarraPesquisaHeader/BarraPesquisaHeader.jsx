import React from 'react';
import style from './style.module.scss';
import { IoSearch } from 'react-icons/io5';
import { UserContext } from '../../../GlobalContext';

const BarraPesquisaHeader = () => {
  const { activeBarraPesquisa, pesquisar, errorPesquisa, setErrorPesquisa } =
    React.useContext(UserContext);
  const [value, setValue] = React.useState('');

  function handleTyping({ target }) {
    setValue(target.value);
    setErrorPesquisa(null);
  }

  return (
    <div
      className={style.barraPesquisaHeader}
      style={{ display: activeBarraPesquisa ? 'flex' : 'none' }}
    >
      <input
        type="text"
        value={value}
        onChange={handleTyping}
        placeholder="Filmes, Series, Atores..."
      />
      <button onClick={() => pesquisar(value)}>
        <IoSearch />
      </button>
      {errorPesquisa && <span className={style.error}>{errorPesquisa}</span>}
    </div>
  );
};

export default BarraPesquisaHeader;
