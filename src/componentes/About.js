import React from 'react';
import '../hojas-de-estilo/About.css';

const About = () => {
  return (
      <div className='about-container'>
          <div className='about-desc'>
              <h3>Let me tell you something about me</h3>
              <p> Lorem30 ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat vero ipsa praesentium similique facere sint architecto repellat, quos expedita id natus modi, laboriosam velit commodi! Libero eaque sunt qui.   </p>
          </div>
          <div className='about-img'>
                <img src='https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg' alt='about'/>
          </div>
      </div>
  ) 
}

export default About