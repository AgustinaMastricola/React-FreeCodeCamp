import React from 'react';
import '../stylesheets/Testimony.css';

function Testimony(props) {
  return(
    <div className='container-testimony'>
      <img 
        className='img-testimony' 
        src={require(`../images/testimony-${props.img}.png`)}
        alt='Pic by Emma' 
      />
      <div className='container-text-testimony'>
        <p className='name-testimony' ><strong>{props.name}</strong> in {props.country}</p>
        <p className='charge-testimony'>{props.charge} at <strong>{props.company}</strong></p>
        <p className='text-testimony'>"{props.testimony}"</p>
      </div>
    </div>
  );
}
export default Testimony; 