import {useState, useEffect} from 'react';
import './Hide.css';
import Home from './Home';
import FullTimeRippling from './FullTimeRippling';
import Nuro from './Nuro';
import Rippling from './Rippling';
import PagerDuty from './PagerDuty';
import OANDA from './OANDA';
import UWJob from './UWJob';
import AuvikNetworks from './AuvikNetworks';
import IntelliCulture from './IntelliCulture';

function Header() {
  const MAX_INDEX = 8;
  const MIN_INDEX = 0;
  const [visibilityIndex, setVisibilityIndex] = useState(MIN_INDEX);
  
  function updateVisibilityIndex(nextIndex: number) {
    if (nextIndex > MAX_INDEX) {
      setVisibilityIndex(MIN_INDEX)
    } else if (nextIndex < MIN_INDEX) {
      setVisibilityIndex(MIN_INDEX)
    } else {
      setVisibilityIndex(nextIndex)
    }
  }
  console.log('hide page');
  return (
   <div id="container">
     {
        visibilityIndex == 0 
         && 
        <div id="hide">
              <Home visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 1
         &&
        <div id="hide">
              <FullTimeRippling visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 2
         && 
        <div id="hide">
              <Nuro visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 3
         && 
        <div id="hide">
              <Rippling visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 4
         && 
        <div id="hide">
              <PagerDuty visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 5
         && 
        <div id="hide">
              <OANDA visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 6
         && 
        <div id="hide">
              <UWJob visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 7
         && 
        <div id="hide">
              <AuvikNetworks visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 8
         && 
        <div id="hide">
              <IntelliCulture visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
    {/* <div id="height">
      <b>debug height: {height}</b> 
    </div> */}
   </div>
  );
}

export default Header;
