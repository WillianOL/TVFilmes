import React from 'react'
import BannerPesquisa from './BannerPesquisa/BannerPesquisa'
import Populares from './Populares/Populares'
import DestaquesDoMomento from './DestaquesDoMomento/DestaquesDoMomento'
import AtoresPopulares from './AtoresPopulares/AtoresPopulares'

const Home = () => {
  return (
    <main>
      <BannerPesquisa />
      <Populares />
      <DestaquesDoMomento />
      <AtoresPopulares />
    </main>
  )
}

export default Home
