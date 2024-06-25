import React from 'react'
import style from './style.module.scss'
import useFetch from '../../../../hooks/useFetch'
import { GET_KEYWORD } from '../../../../api/api'

const PalavraChave = ({ palavra, setPalavra, setKeyword }) => {
  const { dados, error, requisicao } = useFetch()

  function handleWrite({ target }) {
    setPalavra(target.value)
  }

  async function pesquisarPalavra() {
    if(palavra === "") {
      setKeyword("")
      return
    }
    const { options, url } = GET_KEYWORD(palavra);
    await requisicao(url, options)
  }

  React.useEffect(() => {
    if(palavra !== "") {
      setKeyword(dados.results[0].id)
    }
  }, [dados, setKeyword])

  return (
    <div className={style.conteiner}>
      <h3>Palavra-chave</h3>
      <input type="text" placeholder='Por palavra-chave' value={palavra} onChange={handleWrite} onBlur={pesquisarPalavra} />
    </div>
  )
}

export default PalavraChave
