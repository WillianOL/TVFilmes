import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Titulo from '../Titulo/Titulo'
import { GET_ATORES_POPULARES } from '../../../api/api'
import CarrosselAtores from './CarrosselAtores/CarrosselAtores'
import style from './style.module.scss'

const AtoresPopulares = () => {
  const {loading, requisicao, dados} = useFetch()

  React.useEffect(() => {
    const {url, options} = GET_ATORES_POPULARES()
    requisicao(url, options)
  }, [requisicao])

  return (
    <section className={style.conteiner}>
      <Titulo>Atores populares</Titulo>
      {dados && <CarrosselAtores dados={dados} loading={loading}/>}
    </section>
  )
}

export default AtoresPopulares
