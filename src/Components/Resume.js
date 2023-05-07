import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var tools = data.tools.map(function (tool) {
      return (
        <div key={tool.name} className="box">
          {tool.name}
        </div>
      );
    });
    var soft = data.soft.map(function (soft) {
      return (
        <div key={soft.name} className="box">
          {soft.name}
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      return (
        <div key={skills.name} className="box">
          {skills.name}
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row skill">
        <div>
          <h1>Skills</h1>
        </div>
        <div className="row skills">
            <div className="three columns header-col">
              <h2>
                <span>Technologies :</span>
              </h2>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{skills}</div>
              </div>
            </div>
          </div>
          <div className="row skills">
            <div className="three columns header-col">
              <h2>
                <span>Tools :</span>
              </h2>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{tools}</div>
              </div>
            </div>
          </div>
          <div className="row skills">
            <div className="three columns header-col">
              <h2>
                <span>Soft Skills :</span>
              </h2>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{soft}</div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Resume;
