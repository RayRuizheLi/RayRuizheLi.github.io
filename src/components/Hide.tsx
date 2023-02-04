import {useState, useEffect} from 'react';
import './Hide.css';
import Home from './Home';
import Nuro from './Nuro';
import Rippling from './Rippling';
import PagerDuty from './PagerDuty';

function Header() {
  const MAX_INDEX = 3;
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
              <Nuro visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 2
         && 
        <div id="hide">
              <Rippling visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
      {
        visibilityIndex == 3
         && 
        <div id="hide">
              <PagerDuty visibilityIndex={visibilityIndex} setVisibilityIndex={updateVisibilityIndex}/>
        </div>
      }
    {/* <div id="height">
      <b>debug height: {height}</b> 
    </div> */}
   </div>
  );
}

export default Header;
