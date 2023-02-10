import React from 'react';
import './General.css';
import './IntelliCultureGraphics.css'

import IntelliCultureLogo from './images/IntelliCulture/Intelliculture-banner.png'
import IntelliCultureProduct from './images/IntelliCulture/Intelliculture-products.png'

function IntelliCultureGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://www.intelliculture.com/" target="_blank"><img className="Logo" src={IntelliCultureLogo} width="55%" alt="IntelliCulture Logo" /></a>
      <div>      
        <img className="LogoCar" src={IntelliCultureProduct} width="75%" alt="IntelliCulture Product" />
      </div> 
    </div>
  );
}

export default IntelliCultureGraphics;