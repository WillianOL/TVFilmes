import React from 'react'
import Itens from '../../../Home/CarrosselDeItens/Itens/Itens'
import style from './style.module.scss'

const Resultados = ({dados, media}) => {

  return (
    <section className={style.resultadosConteiner}>
      <ul className={style.resultadosItens}>
        {dados.results.map((item) => {
          return <Itens dado={item} media={media} key={item.id}/>
        })}
      </ul>
    </section>
  )
}

export default Resultados
