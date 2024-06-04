import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { GET_DETALHES_FILME } from '../../api/api'
import BannerFilme from './BannerFilme/BannerFilme'
import AtoresDoFilme from './AtoresDoFilme/AtoresDoFilme'

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
    <main style={{gap: '30px'}}>
      <BannerFilme dados={dados} loading={loading} />
      <AtoresDoFilme dados={dados.credits.cast} loading={loading} />
    </main>
  )
}

export default DetalhesFilme
