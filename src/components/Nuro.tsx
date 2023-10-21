import React from 'react';
import './General.css';
import './Nuro.css';
import './Work.css';
import NuroGraphics from './NuroGraphics';

interface HomeProps {
  visibilityIndex: number,
  setVisibilityIndex: (arg: number) => void
}

const techStack = "Golang, MySQL, gRPC, Google Cloud Platform"
const summary = "Designed and implemented a scheduled capacity planner to handle autonomous vehicle deliveries as Nuro scales to multi-city deployments."

const Nuro: React.FC<HomeProps> = ({visibilityIndex, setVisibilityIndex}) => {
  return (
    <div className="Main">
      <div className="Work">
        <h1><div className="Bracket">{"{"}</div></h1>
        <h1 className="Indented"><div className="Tag">Company</div>:&nbsp;<a className="CompanyLink" href="https://www.nuro.ai/" target="_blank">"Nuro"</a>,</h1>
        <h1 className="Indented"><div className="Tag">Year</div>:&nbsp;"2022",</h1>
        <h1 className="Indented"><div className="Tag">Team</div>:&nbsp;"Commercialization",</h1>
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
      <NuroGraphics/>
    </div>
  );
}

export default Nuro;
