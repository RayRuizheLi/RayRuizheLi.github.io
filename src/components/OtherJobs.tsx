import React from 'react';
import './General.css';
import './OtherJobs.css';
import './Work.css';
import OtherJobsGraphics from './OtherJobsGraphics';

interface HomeProps {
  visibilityIndex: number,
  setVisibilityIndex: (arg: number) => void
}

const techStackUniversityOfWaterloo = " ROS, C++, Python "
const techStackAuvikNetworks = " React, PostgreSQL, Kubernetes, Flask " 

const summaryUniversityOfWaterloo = "Designed a behavioural planner based on finite state machine architecture for the school's autonomous vehicle."
const summaryAuvikNetworks = "Built support tools using Flask framework, React library, and PostgreSQL for all sales employees."
const summaryIntelliCulture = "Designed IntelliCulture's website and UI for a minimum viable farm vehicle tracker using mockup tools."


const OtherJobs: React.FC<HomeProps> = ({visibilityIndex, setVisibilityIndex}) => {
  return (
    <div className="Main">
      <div className="Work">
        <h1><div className="Bracket">{"{"}</div></h1>
        <h1 className="Indented"><div className="Tag">Company</div>:&nbsp;<a className="CompanyLink" href="https://uwaterloo.ca/" target="_blank">"University of Waterloo"</a>,</h1>
        <h1 className="Indented"><div className="Tag">Title</div>:&nbsp;"Autonomous Driving Researcher",</h1>
        <h1 className="Indented"><div className="Tag">Tech Stack</div>:&nbsp;<div className="Bracket">{"["}</div>{techStackUniversityOfWaterloo}<div className="Bracket">{"]"}</div></h1>
        <h1 className="Indented"><div className="Tag">Summary</div>:&nbsp;&nbsp;<div className="Bracket">{"["}</div></h1>
        <h1 className="DoubleIndented">"{summaryUniversityOfWaterloo}"</h1>
        <h1 className="Indented"><div className="Bracket">{"]"}</div></h1>
        <h1><div className="Bracket">{"{"}</div></h1>
        <h1 className="Indented"><div className="Tag">Company</div>:&nbsp;<a className="CompanyLink" href="https://www.auvik.com/" target="_blank">"Auvik Networks"</a>,</h1>
        <h1 className="Indented"><div className="Tag">Title</div>:&nbsp;"Software Developer Internship",</h1>
        <h1 className="Indented"><div className="Tag">Tech Stack</div>:&nbsp;<div className="Bracket">{"["}</div>{techStackAuvikNetworks}<div className="Bracket">{"]"}</div></h1>
        <h1 className="Indented"><div className="Tag">Summary</div>:&nbsp;&nbsp;<div className="Bracket">{"["}</div></h1>
        <h1 className="DoubleIndented">"{summaryAuvikNetworks}"</h1>
        <h1 className="Indented"><div className="Bracket">{"]"}</div></h1>
        <h1 className="Bracket">{"}"}</h1>
        <h1><div className="Bracket">{"{"}</div></h1>
        <h1 className="Indented"><div className="Tag">Company</div>:&nbsp;<a className="CompanyLink" href="https://www.intelliculture.com/" target="_blank">"IntelliCulture"</a>,</h1>
        <h1 className="Indented"><div className="Tag">Title</div>:&nbsp;"UX Designer",</h1>
        <h1 className="Indented"><div className="Tag">Summary</div>:&nbsp;&nbsp;<div className="Bracket">{"["}</div></h1>
        <h1 className="DoubleIndented">"{summaryIntelliCulture}"</h1>
        <h1 className="Indented"><div className="Bracket">{"]"}</div></h1>        <h1 className="Bracket">{"}"}</h1>
        <h1><div className="Bracket">{"{"}</div></h1>
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
      <OtherJobsGraphics/>
    </div>
  );
}

export default OtherJobs;
