import React from 'react'
import style from './style.module.scss'
import Dados from './Dados/Dados';
import Historico from './Historico/Historico';

const PersonagensEDados = ({dados}) => {
  return (
    <section className={style.conteiner}>
      <Dados dados={dados}/>
      <Historico dados={dados}/>
    </section>
  )
}

export default PersonagensEDados
