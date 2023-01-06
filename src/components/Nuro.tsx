import React from 'react';
import './Home.css';

interface HomeProps {
  visibilityIndex: number,
  setVisibilityIndex: (arg: number) => void
}

const techStack = "Golang, MySQL, GRPC, Google Cloud, Prometheus, LogDNA"
const summary = "Designed and deployed the scheduled order capacity planner for the Nuro autonomous delivery robot."

const Nuro: React.FC<HomeProps> = ({visibilityIndex, setVisibilityIndex}) => {
  console.log(visibilityIndex)
  return (
    <div className="Home">
      <div className="Intro">
        <h1>{"{"}</h1>
        <h1 className="Indented">"Company":&nbsp;"Nuro",</h1>
        <h1 className="Indented">"Team":&nbsp;"Commercialization",</h1>
        <h1 className="Indented">"Title":&nbsp;"Software Developer Intern",</h1>
        <h1 className="Indented">"Tech Stack":&nbsp;{"["}</h1>
        <h1 className="DoubleIndented">{techStack}</h1>
        <h1 className="Indented">{"]"}</h1>
        <h1 className="Indented">"Summary":&nbsp;"One line summary",</h1>
        <h1 className="Indented">"Details":&nbsp;"One line summary",</h1>
        <h1 className="Indented">"Nav":&nbsp;{"["}</h1>
        <div className="DoubleIndented">
          <h1 className="NavButton" onClick={() => {
            setVisibilityIndex(1)}
            }>
              Intro
          </h1>
        </div>
        <h2 className="Indented">{"]"}</h2>
        <h1>{"}"}</h1>
      </div>
    </div>
  );
}

export default Nuro;
