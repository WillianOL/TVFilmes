import React from 'react'
import style from './style.module.scss'

const SelecionarAno = ({ ano, setAno }) => {
  const [error, setError] = React.useState(null)

  function escreverAno({target}) {
    if(target.value.length > 4) {
      setError('O ano deve ter no máximo 4 números.')
    }else if(target.value < 0 || target.value > new Date().getFullYear()) {
      setError('Digite um ano valido.')
    } else {
      setError(null)
      setAno(target.value)
    }
  }
  
  return (
    <div className={style.conteinerAno}>
      <h3>Por ano</h3>
      <label>
        <p>Ano:</p>
        <input type="number" value={ano} onChange={escreverAno} placeholder='1999 ou 2020...'/>
      </label>
      {error && <p className={style.erroAno}>{error}</p>}
    </div>
  )
}

export default SelecionarAno
