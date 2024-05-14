import React from 'react'
import style from './style.module.scss'

const Titulo = ({children}) => {
  return (
    <h1 className={style.titulo}>{children}</h1>
  )
}

export default Titulo
