import React from 'react';
import './General.css';
import './OtherJobsGraphics.css'

import UniversityOfWaterlooLogo from './images/UniversityOfWaterloo/UniversityOfWaterloo-logo.png'
import UniversityOfWaterlooBanner from './images/UniversityOfWaterloo/UniversityOfWaterloo-banner.jpg'
import AuvikNetworksLogo from './images/AuvikNetworks/AuvikNetworks-logo.png'
import AuvikNetworksProduct from './images/AuvikNetworks/AuvikNetworks-product.png'
import IntelliCultureLogo from './images/IntelliCulture/Intelliculture-banner.png'
import IntelliCultureProduct from './images/IntelliCulture/IntelliCulture-products.png'


function OtherJobsGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://uwaterloo.ca/" target="_blank"><img className="LogoOthers" src={UniversityOfWaterlooLogo} width="22%" alt="University of Waterloo Logo" /></a>
      <img className="LogoOthers" src={UniversityOfWaterlooBanner} width="60%" alt="University of Waterloo Banner" />
      <a href="https://www.auvik.com/" target="_blank"><img className="LogoOthers" src={AuvikNetworksLogo} width="25%" alt="Auvik Networks Logo" /></a>
      <img className="LogoOthers" src={AuvikNetworksProduct} width="40%" alt="Auvik Networks Products" />
      <a href="https://www.intelliculture.com/" target="_blank"><img className="LogoOthers" src={IntelliCultureLogo} width="30%" alt="IntelliCulture Logo" /></a>
      <img className="LogoOthers" src={IntelliCultureProduct} width="60%" alt="IntelliCulture Products" />
      {/* <div>      
        <img className="Logo" src={OANDATrading} width="85%" alt="OANDA Trading Tools" />
      </div>  */}
    </div>
  );
}

export default OtherJobsGraphics;