import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';
import '../hojas-de-estilo/Slider.css';
const Slider = () => {
  return (
      <div className='carousel-container'>
          <div className='carousel-title'>
              <h2>My Proyects</h2>
          </div>  
          <Carousel
              arrows
              slidesPerPage={3}
              infinite
              animationSpeed={200}
              centered
              offset={50}
              itemWidth={400}
              slides={Slides}
              breakpoints={{
                  960: {
                      sliderPerPage: 1,
                      arrows: false,
                      itemWidth: 250,
                  }
              }}
          />
      </div>
  )
}

export default Slider