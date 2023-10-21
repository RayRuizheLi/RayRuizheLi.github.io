import React from 'react';
import './General.css';
import './NuroGraphics.css'

import RipplingLogoWithName from './images/Rippling/rippling-payroll.jpg'
import RipplingProducts from './images/Rippling/rippling-products.png'


function RipplingGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://www.rippling.com/" target="_blank"><img className="Logo" src={RipplingLogoWithName} width="65%" alt="Rippling Logo" /></a>
      <div>      
        <img className="Logo" src={RipplingProducts} width="65%" alt="Rippling Products" />
      </div> 
    </div>
  );
}

export default RipplingGraphics;