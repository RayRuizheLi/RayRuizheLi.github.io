import {useState, useEffect} from 'react';
import './Hide.css';
import Home from './Home';
import Nuro from './Nuro';

function Header() {
  const MAX_INDEX = 1;
  const MIN_INDEX = 0;
  const [visibilityIndex, setVisibilityIndex] = useState(MIN_INDEX);

  return (
   <div id="container">
     {
        // visibilityIndex == 0 
        //  && 
       <div id="hide">
            <Home visibilityIndex={visibilityIndex} setVisibilityIndex={setVisibilityIndex}/>
       </div>
      }
      {/* {
        visibilityIndex == 1 
         && 
        <div id="hide">
              <Nuro visibilityIndex={visibilityIndex} setVisibilityIndex={setVisibilityIndex}/>
        </div>
      } */}
    {/* <div id="height">
      <b>debug height: {height}</b> 
    </div> */}
   </div>
  );
}

export default Header;
