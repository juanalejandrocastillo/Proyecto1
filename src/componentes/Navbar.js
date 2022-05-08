import React from 'react'
import '../hojas-de-estilo/Navbar.css';

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

  return (
      <nav className={`navbar ${isScrolling >20 ? 'scrolling': null}`}>
          <div className='navbar-logo' onClick={toTheTop}>
            Juan Alejandro Castillo
          </div>
      </nav>
  )
}

export default Navbar