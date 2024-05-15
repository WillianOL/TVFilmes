import React from 'react'
import BannerPesquisa from './BannerPesquisa/BannerPesquisa'
import Populares from './Populares/Populares'
import DestaquesDoMomento from './DestaquesDoMomento/DestaquesDoMomento'

const Home = () => {
  return (
    <main>
      <BannerPesquisa />
      <Populares />
      <DestaquesDoMomento />
    </main>
  )
}

export default Home
