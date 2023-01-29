import React from 'react'
import Header from './componentes/header/Header'
import Slider from './componentes/slider/Slider'
import Depoimentos from './componentes/depoimentos/Depoimentos'
import Galeria from './componentes/galeria/Galeria'
import Mapa from './componentes/mapa/Mapa'
import Footer from './componentes/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Slider/>
        <Depoimentos/>
        <Galeria/>
        <Mapa/>
        <Footer/>
    </>
  )
}

export default App