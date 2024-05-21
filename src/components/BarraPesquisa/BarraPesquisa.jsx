import React from 'react';
import { IoSearch } from 'react-icons/io5';
import style from './style.module.scss';
import { UserContext } from '../../GlobalContext';

const BarraPesquisa = () => {
  const { pesquisar, setErrorPesquisa, errorPesquisa } =
    React.useContext(UserContext);
  const [value, setValue] = React.useState('');

  function handleTyping({ target }) {
    setValue(target.value);
    setErrorPesquisa(null);
  }

  return (
    <div className={style.barraPesquisa}>
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

export default BarraPesquisa;
