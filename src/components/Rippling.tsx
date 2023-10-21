import React from 'react';
import './General.css';
import './Rippling.css';
import './Work.css';
import RipplingGraphics from './RipplingGraphics';

interface HomeProps {
  visibilityIndex: number,
  setVisibilityIndex: (arg: number) => void
}

const techStack = "React, Django, MongoDB, Python"
const summary = "Developed features to enable bulk editing on existing components to reduce work for larger customers.  Created a system to create customer termination reasons and increase termination types."

const Rippling: React.FC<HomeProps> = ({visibilityIndex, setVisibilityIndex}) => {
  return (
    <div className="Main">
      <div className="Work">
        <h1><div className="Bracket">{"{"}</div></h1>
        <h1 className="Indented"><div className="Tag">Company</div>:&nbsp;<a className="CompanyLink" href="https://www.rippling.com/" target="_blank">"Rippling"</a>,</h1>
        <h1 className="Indented"><div className="Tag">Year</div>:&nbsp;"2022",</h1>
        <h1 className="Indented"><div className="Tag">Team</div>:&nbsp;"HRIS",</h1>
        <h1 className="Indented"><div className="Tag">Title</div>:&nbsp;"Full Stack Developer Intern",</h1>
        <h1 className="Indented"><div className="Tag">Tech Stack</div>:&nbsp;<div className="Bracket">{"["}</div></h1>
        <h1 className="DoubleIndented">"{techStack}"</h1>
        <h1 className="Indented"><div className="Bracket">{"]"}</div></h1>
        <h1 className="Indented"><div className="Tag">Summary</div>:&nbsp;&nbsp;<div className="Bracket">{"["}</div></h1>
        <h1 className="DoubleIndented">"{summary}"</h1>
        <h1 className="Indented"><div className="Bracket">{"]"}</div></h1>
        <h1 className="Indented"><div className="Tag">Nav</div>:&nbsp;<div className="Bracket">{"["}</div></h1>
        <div className="DoubleIndented">
          <h1 className="NavButton" onClick={() => {
            setVisibilityIndex(0)}
            }>
              Intro
          </h1>
          <h1 className="NavButton" onClick={() => {
            setVisibilityIndex(visibilityIndex + 1)}
            }>
              Next
          </h1>
          <h1 className="NavButton" onClick={() => {
            setVisibilityIndex(visibilityIndex - 1)}
            }>
              Back
          </h1>
        </div>
        <h2 className="Indented"><div className="Bracket">{"]"}</div></h2>
        <h1 className="Bracket">{"}"}</h1>
      </div>
      <RipplingGraphics/>
    </div>
  );
}

export default Rippling;
