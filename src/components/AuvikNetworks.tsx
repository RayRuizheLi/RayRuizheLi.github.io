import React from 'react';
import './General.css';
import './AuvikNetworks.css';
import './Work.css';
import AuvikNetworksGrphics from './AuvikNetworksGraphics';

interface HomeProps {
  visibilityIndex: number,
  setVisibilityIndex: (arg: number) => void
}

const techStack = " React, PostgreSQL, Kubernetes, Flask " 
const summary = "Built support tools using Flask framework, React library, and PostgreSQL for all sales employees."

const AuvikNetworks: React.FC<HomeProps> = ({visibilityIndex, setVisibilityIndex}) => {
  return (
    <div className="Main">
      <div className="Work">
        <h1><div className="Bracket">{"{"}</div></h1>
        <h1 className="Indented"><div className="Tag">Company</div>:&nbsp;<a className="CompanyLink" href="https://www.auvik.com/" target="_blank">"Auvik Networks"</a>,</h1>
        <h1 className="Indented"><div className="Tag">Year</div>:&nbsp;"2019",</h1>
        <h1 className="Indented"><div className="Tag">Team</div>:&nbsp;"Infrastructure",</h1>
        <h1 className="Indented"><div className="Tag">Title</div>:&nbsp;"Software Developer Intern",</h1>
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
      <AuvikNetworksGrphics/>
    </div>
  );
}

export default AuvikNetworks;
