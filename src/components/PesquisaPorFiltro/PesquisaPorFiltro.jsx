import React from 'react'
import SideBarFiltro from './SideBarFiltro/SideBarFiltro'
import Resultados from './Resultados/Resultados'
import style from './style.module.scss'

const PesquisaPorFiltro = ({tipo}) => {
  return (
    <section className={style.pesquisaFiltroConteiner}>
      <SideBarFiltro />
      <Resultados tipo={tipo}/>
    </section>
  )
}

export default PesquisaPorFiltro
