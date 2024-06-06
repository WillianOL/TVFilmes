import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { GET_DETALHES_SERIE } from '../../../api/api'
import { Route, Routes, useParams } from 'react-router-dom'
import DetalhesConteiner from './DetalhesConteiner/DetalhesConteiner'
import TodosDoElenco from '../Atores/TodosDoElenco/TodosDoElenco'

const DetalhesSerie = () => {
  const {dados, requisicao, loading, error} = useFetch()
  const {id} = useParams()

  React.useEffect(() => {
     const {url, options} = GET_DETALHES_SERIE(id)
     requisicao(url, options)
  }, [id, requisicao])
  console.log(dados);

  if(error) return <p>Ocorreu um erro inesperado, volte ao inicio</p>
  if(dados)
  return (
    <main>
      <Routes>
        <Route path="" element={<DetalhesConteiner dados={dados} loading={loading}/>} />
        <Route path="elenco" element={<TodosDoElenco dados={dados.credits} loading={loading}/>} />
      </Routes>
    </main>
  )
}

export default DetalhesSerie
