import React from 'react'
import '../hojas-de-estilo/Cover.css';
import covervideo from '../Video/covervideo.mp4';

const Cover = () => {
  return (
      <div className='cover-container'>
          <video className='video' src={covervideo} autoPlay loop muted />
          <h1> Juan Alejandro Castillo</h1>
          <p>Developer | Designer | Content Creator | Entrepenur </p>
    </div>
  )
}

export default Cover