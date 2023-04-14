import React from 'react';

const About = (props) => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Eos diam sadipscing sea diam aliquyam et at et et dolor. Elitr et gubergren accusam diam ut lorem. Sed kasd magna lorem diam dolore stet no gubergren. Consetetur consetetur invidunt ipsum labore duo aliquyam eirmod.</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About;