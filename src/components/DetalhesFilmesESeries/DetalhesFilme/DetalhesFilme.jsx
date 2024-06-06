import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { GET_DETALHES_FILME } from '../../../api/api'
import DetalhesConteiner from './DetalhesConteiner/DetalhesConteiner'
import TodosDoElenco from '../Atores/TodosDoElenco/TodosDoElenco'

const DetalhesFilme = () => {
  const {id} = useParams()
  const {dados, loading, requisicao, error} = useFetch()

  React.useEffect(() => {
    const {url, options} = GET_DETALHES_FILME(id)
    requisicao(url, options)
  }, [requisicao, id])

  if(error) return <p>Ocorreu um error inesperado, volte ao inicio</p>
  if(dados)
  return (
    <main>
      <Routes>
        <Route path='' element={<DetalhesConteiner dados={dados} loading={loading} />}/>
        <Route path='elenco' element={<TodosDoElenco dados={dados.credits}/>}/>
      </Routes>
    </main>
  )
}

export default DetalhesFilme
