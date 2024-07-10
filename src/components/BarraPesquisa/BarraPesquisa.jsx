import React from 'react';
import { IoSearch } from 'react-icons/io5';
import style from './style.module.scss';
import { UserContext } from '../../GlobalContext';
import { Link } from 'react-router-dom';

const BarraPesquisa = ({mobile}) => {
  const { setErrorPesquisa, errorPesquisa } =
    React.useContext(UserContext);
  const [value, setValue] = React.useState('');

  function handleTyping({ target }) {
    setValue(target.value);
    setErrorPesquisa(null)
  }

  function handleClick(event) {
    if(value === "") {
      event.preventDefault()
      setErrorPesquisa('Digite algo para realizar a pesquisa.')
    }
  }

  return (
    <div className={mobile ? style.barraPesquisaMobile : style.barraPesquisa}>
      <input
        type="text"
        value={value}
        onChange={handleTyping}
        placeholder="Filmes, Series, Atores..."
      />
      <Link to={`/resultadoPesquisa/${value}`} onClick={handleClick}>
        <IoSearch />
      </Link>
      {errorPesquisa && <span className={style.error}>{errorPesquisa}</span>}
    </div>
  );
};

export default BarraPesquisa;
