import React from 'react';
import './General.css';
import './AuvikNetworksGraphics.css'

import AuvikNetworksLogo from './images/AuvikNetworks/AuvikNetworks-logo.png'
import AuvikNetworksProduct from './images/AuvikNetworks/AuvikNetworks-product.png'

function AuvikNetworksGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://www.auvik.com/" target="_blank"><img className="Logo" src={AuvikNetworksLogo} width="30%" alt="AuvikNetworks Logo" /></a>
      <div>      
        <img className="LogoCar" src={AuvikNetworksProduct} width="80%" alt="AuvikNetworks Products" />
      </div> 
    </div>
  );
}

export default AuvikNetworksGraphics;