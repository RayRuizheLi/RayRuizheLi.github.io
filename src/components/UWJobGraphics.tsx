import React from 'react';
import './General.css';
import './UWJobGraphics.css'

import UniversityOfWaterlooLogo from './images/UniversityOfWaterloo/UniversityOfWaterloo-logo.png'
import UniversityOfWaterlooBanner from './images/UniversityOfWaterloo/UniversityOfWaterloo-banner.jpg'
import WATOBolt from './images/UniversityOfWaterloo/WATo_bolt.png'


function UWJobGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://uwaterloo.ca/" target="_blank"><img className="Logo" src={UniversityOfWaterlooLogo} width="22%" alt="University of Waterloo Logo" /></a>
      <img className="Logo" src={UniversityOfWaterlooBanner} width="60%" alt="University of Waterloo Banner" />
      <div>      
        <img className="LogoCar" src={WATOBolt} width="75%" alt="Wato bolt vehicle" />
      </div> 
    </div>
  );
}

export default UWJobGraphics;