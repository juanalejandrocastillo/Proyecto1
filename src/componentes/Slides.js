import React from 'react';
import '../hojas-de-estilo/Slider.css';

const slidesInfo =
    [
        { 
        src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
        alt: 'Calculadora React',
        desc: <a className='links'href='https://juanalejandrocastillo.github.io/calculadoraReact/' target='_blank' rel='noreferrer'>
                Calculadora React
                </a>,
    },
        {
        src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
        alt: 'Contador de Clics',
        desc: <a className='links'href='https://juanalejandrocastillo.github.io/contador-click/' target='_blank' rel='noreferrer'>
                Contador de Clics
                </a>,
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg' ,
        alt: 'Proyect 3',
        desc: <a className='links'href='https://juanalejandrocastillo.github.io/aplicacion-tareas/' target='_blank' rel='noreferrer'>
            Aplicacion de Tareas
            </a>,
    },
]

const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        
        <img src={slide.src}   alt={slide.alt} />
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides