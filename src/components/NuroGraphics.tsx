import React from 'react';
import './General.css';
import './NuroGraphics.css'

import NuroLogo from './images/Nuro/nuro-logo.avif'
import Nurobot from './images/Nuro/uber-nurobot.jpg'
import SevenEleven from './images/Nuro/7-eleven.png'
import Chipotle from './images/Nuro/chipotle.png'
import Dominos from './images/Nuro/dominos.png'
import Fedex from './images/Nuro/fedex.png'
import Kroger from './images/Nuro/kroger.png'
import Walmart from './images/Nuro/walmart.png'
import Uber from './images/Nuro/uber.png'

function NuroGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://www.nuro.ai/" target="_blank"><img className="Logo" src={NuroLogo} width="30%" alt="Nuro Logo" /></a>
      <img className="Logo" src={Nurobot} width="43.8%" alt="Nuro Robot" />
      <div>      
        <img className="Logo" src={SevenEleven} width="20%" alt="7-Eleven" />
        <img className="Logo" src={Chipotle} width="13%" alt="Chipotle" />
        <img className="Logo" src={Dominos} width="30%" alt="Dominos" />
        <img className="Logo" src={Fedex} height="20%" width="20%" alt="Fedex" />
        <img className="Logo" src={Kroger} height="20%" width="20%" alt="Kroger" />
        <img className="Logo" src={Walmart} height="20%" width="20%" alt="Walmart" />
        <img className="Logo" src={Uber} height="20%" width="20%" alt="Uber" />
      </div> 
    </div>
  );
}

export default NuroGraphics;