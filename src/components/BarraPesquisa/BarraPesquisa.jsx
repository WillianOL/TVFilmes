import React from 'react';
import { IoSearch } from 'react-icons/io5';
import style from './style.module.scss';
import { UserContext } from '../../GlobalContext';
import { useNavigate } from 'react-router-dom';

const BarraPesquisa = ({mobile}) => {
  const { setErrorPesquisa, errorPesquisa } =
    React.useContext(UserContext);
  const [value, setValue] = React.useState('');
  const pesquisa = useNavigate()

  function handleTyping({ target }) {
    setValue(target.value);
    setErrorPesquisa(null)
  }

  function iniciarPesquisa(event) {
    event.preventDefault()
    if(value === "") {
      setErrorPesquisa('Digite algo para realizar a pesquisa.')
      return
    }
    pesquisa(`/resultadoPesquisa/${value}`)
    setValue('')
  }

  return (
    <form className={mobile ? style.barraPesquisaMobile : style.barraPesquisa}>
      <input
        type="text"
        value={value}
        onChange={handleTyping}
        placeholder="Filmes, Series, Atores..."
      />
      <button type="submit" onClick={iniciarPesquisa}>
        <IoSearch />
      </button>
      {errorPesquisa && <span className={style.error}>{errorPesquisa}</span>}
    </form>
  );
};

export default BarraPesquisa;
