import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div id="navbar">
      <a href="#default" id="logo">FixCell Phone</a>
        <div id="navbar-right">
          <a href="#dep">Depoimentos</a>
          <a href="#insta">Galeria</a>
          <a href="#mapa">Como Chegar</a>
        </div>
    </div>
  )
}

export default Header