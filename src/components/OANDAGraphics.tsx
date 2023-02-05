import React from 'react';
import './General.css';
import './OANDAGraphics.css'

import OANDALogo from './images/OANDA/OANDA-logo.jpg'
import OANDAPartners from './images/OANDA/OANDA-partners.png'
import OANDATrading from './images/OANDA/OANDA-trading.png'


function OANDAGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://www.oanda.com/" target="_blank"><img className="Logo" src={OANDALogo} width="15%" alt="OANDA Logo" /></a>
      <img className="Logo" src={OANDAPartners} width="62%" alt="OANDA Partners" />
      <div>      
        <img className="Logo" src={OANDATrading} width="85%" alt="OANDA Trading Tools" />
      </div> 
    </div>
  );
}

export default OANDAGraphics;