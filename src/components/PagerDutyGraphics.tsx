import React from 'react';
import './General.css';
import './PagerDutyGraphics.css'

import PagerDutyLogo from './images/PagerDuty/pagerduty-logo.png'
import PagerDutyBanner from './images/PagerDuty/pagerduty-banner.png'
import PagerDutyCustomers from './images/PagerDuty/pagerduty-customers.png'


function PagerDutyGraphics() {
  return (
    <div className="CompanyGraphics">
      <a href="https://www.pagerduty.com/" target="_blank"><img className="Logo" src={PagerDutyLogo} width="25%" alt="PagerDuty Logo" /></a>
      <img className="Logo" src={PagerDutyBanner} width="48%" alt="PagerDuty Banner" />
      <div>      
        <img className="Logo" src={PagerDutyCustomers} width="77%" alt="PagerDuty Customers" />
      </div> 
    </div>
  );
}

export default PagerDutyGraphics;