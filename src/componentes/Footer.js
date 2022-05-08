import React from 'react';
import '../hojas-de-estilo/Footer.css'

const Footer = () => {
  return (
      <footer className='footer'>
          <div className='footer-info'>
              <h1>Juan Alejandro Castillo</h1>
              <p> Tierra del Fuego - Argentina</p>
          </div>
          <div className='footer-contact'>
              <h3>Contactame</h3>
              <p>And lets get down to work</p>
          </div>
          <div className='footer-sns'>
              <div className='design-by'>
                  Design By JuanCastillo
              </div>
              <div className='sns-link'>
                <a href='https://linkedin.com'target='_blank' rel='noreferrer'>
                      <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                      <i className='fab fa-twitter twitter'></i>
                </a>
                <a href='https://facebook.com'target='_blank' rel='noreferrer'>
                      <i className='fab fa-facebook facebook'></i>
                </a>
              </div>
          </div>
    </footer>
  )
}

export default Footer