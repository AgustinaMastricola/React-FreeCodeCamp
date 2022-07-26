import React from 'react';
import '../stylesheets/Testimony.css';

function Testimony() {
  return(
    <div className='container-testimony'>
      <img 
        className='img-testimony' 
        src={require('../images/testimony-emma.png')}
        alt='Pic by Emma' 
      />
      <div className='container-text-testimony'>
        <p className='name-testimony' >Emma Bostian in Sweden</p>
        <p className='charge-testimony'>Software Engineer at Spotify</p>
        <p className='text-testimony'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>

    </div>
  );
}
export default Testimony; 