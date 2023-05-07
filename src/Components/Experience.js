import React from "react";

export default function Experience({data}){
  if(data){
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          {work.experience.map((exp)=> (
            <div key={exp.title}>
            <p className="info">
            {exp.title}
            <span>&bull;</span> <em className="date">{exp.years}</em>
          </p>
          <span>{exp.description}</span>
          </div>
          )
          
          )}
        </div>
      );
    });
  }
  return(
    <section id="experience">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Expereince</h1>

          <div className="nine columns main-col"
          >
            {work}
          </div>
        </div>
      </div>
    </section>
  )
  
}