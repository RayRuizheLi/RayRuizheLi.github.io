import React from 'react';
import './General.css';
import './PagerDuty.css';
import './Work.css';
import PagerDutyGraphics from './PagerDutyGraphics';

interface HomeProps {
  visibilityIndex: number,
  setVisibilityIndex: (arg: number) => void
}

const techStack = "Elixir, Kafka, MySQL"
const summary = "Set up and test Gh-ost for MySQL schema migration on the incidents table. Worked on varies tasks depending on the team's need. Configured Confluent Kafka Admin Client on all 168 hosts in Staging and Production."

const PagerDuty: React.FC<HomeProps> = ({visibilityIndex, setVisibilityIndex}) => {
  return (
    <div className="Main">
      <div className="Work">
        <h1><div className="Bracket">{"{"}</div></h1>
        <h1 className="Indented"><div className="Tag">Company</div>:&nbsp;<a className="CompanyLink" href="https://www.pagerduty.com/" target="_blank">"PagerDuty"</a>,</h1>
        <h1 className="Indented"><div className="Tag">Year</div>:&nbsp;"2021",</h1>
        <h1 className="Indented"><div className="Tag">Team</div>:&nbsp;"Database Reliability",</h1>
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
      <PagerDutyGraphics/>
    </div>
  );
}

export default PagerDuty;
