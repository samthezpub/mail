import React from 'react';

import Accordion from './Accordion';

import FaqImage from '@assets/images/faq.png';

import "@assets/css/faq/faq.css";

const Support = () => {
  return (
    <div className='block faq'>
      <div className="container">
        <div id='imageBlock' className="image">
          <img id='image' src={FaqImage} alt="FaqImage" />
        </div>

        <div className="faq">
          <Accordion></Accordion>
        </div>

      </div>
    </div>
  );
}

export default Support;
