import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Intro">
        <h1>{"{"}</h1>
        <h1 className="Indented">"Name":&nbsp;"Ray Li",</h1>
        <h1 className="Indented">"Hobby":&nbsp;"Yo-Yo",</h1>
        <h1 className="Indented">"Links":&nbsp;{"["}</h1>
        <h1 className="DoubleIndented">
            <a className="IntroLink" href="https://github.com/RayRuizheLi" target="_blank">"Github"</a>,&nbsp;
            <a className="IntroLink" href="https://www.linkedin.com/in/ray-ruizhe-li/" target="_blank">"LinkedIn"</a>,&nbsp;
            <a className="IntroLink" href="https://www.instagram.com/rayli.yoyo/" target="_blank">"Instagram"</a>,&nbsp;
            <a className="IntroLink" href="https://drive.google.com/file/d/15tW1PnQqV6W-DUKXL8geD2DosWdbGL6K/view?usp=share_link" target="_blank">"Resume"</a>
        </h1>
        <h1 className="Indented">{"]"}</h1>
        <h1>{"}"}</h1>
      </div>
    </div>
  );
}

let Indented_text = 
`{
    "Name": "Ray Li",
    "Hobby": "Yo-Yo",
    "Links": [
        Github, LinkedIn, Instagram, Resume
    ]
}`;

export default Home;
