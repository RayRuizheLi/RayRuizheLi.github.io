import React from 'react';
import './Home.css';
import './General.css';

interface HomeProps {
  visibilityIndex: number,
  setVisibilityIndex: (arg: number) => void

}


const Home: React.FC<HomeProps> = ({visibilityIndex, setVisibilityIndex}) => {
  console.log(visibilityIndex)
  return (
    <div className="Main">
      <div className="Intro">
        <h1 className="Bracket">{"{"}</h1>
        <div className="Indented">
          <h1 className="Name"><div className="Tag">Name</div>:&nbsp;"Ray Li",</h1>
          <h1><div className="Tag">Hobby</div>:&nbsp;<a className="YoYoLink" href="https://www.instagram.com/rayli.yoyo/" target="_blank">"Yo-Yo&#129664;",</a></h1>
          <div className="ProfessionalContacts">
            <h1><div className="Tag">Links</div>:&nbsp;<div className="Bracket">{"["}</div></h1> 
            <h1 className="DoubleIndented">
                <a className="IntroLink" href="https://github.com/RayRuizheLi" target="_blank">"Github"</a>,&nbsp;
                <a className="IntroLink" href="https://www.linkedin.com/in/ray-ruizhe-li/" target="_blank">"LinkedIn"</a>,&nbsp;
                <a className="IntroLink" href="https://www.instagram.com/rayli.yoyo/" target="_blank">"Instagram"</a>,&nbsp;
                <a className="IntroLink" href="https://drive.google.com/file/d/1dUUWRma9zl0v7b0oTRe_8Fyuz8-kQXT3/view?usp=sharing" target="_blank">"Resume"</a>
            </h1>
            <h1 className="Bracket">{"]"}</h1>
          </div>
        </div> 
        <div className="Nav">
          <h1 className="Indented"><div className="Tag">Nav</div>:&nbsp;<div className="Bracket">{"["}</div></h1>
          <div className="DoubleIndented">
            <h1 className="NavButton" onClick={() => {
                setVisibilityIndex(1)}
                }>Work Experience</h1>
          </div>
          <h2 className="Indented"><div className="Bracket">{"]"}</div></h2>
        </div>
        <h1 className="Bracket">{"}"}</h1>
      </div>
    </div>
  );
}

export default Home;
