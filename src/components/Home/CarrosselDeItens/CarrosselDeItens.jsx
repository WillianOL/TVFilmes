import React from 'react'
import style from './style.module.scss'
import Itens from './Itens/Itens'
import Loading from '../../helper/Loading/Loading'

const CarrosselDeItens = ({dados, loading}) => {
  const totalItens = dados.results.slice(0, 10)

  return (
    <div className={style.carrosselConteiner}>
      {loading && <Loading />}
      <ul className={style.carrosselLista}>
        {totalItens.map((dado) => {
          return <Itens dado={dado} key={dado.id}/>
        })}
      </ul>
    </div>
  )
}

export default CarrosselDeItens
