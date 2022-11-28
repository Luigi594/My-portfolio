import React from "react";
import CardProjects from "./CardProjects";
import Title from "./Content/Title";
import useFetchData from "../hooks/useFetchData";

function Projects() {
  const { data } = useFetchData("Projects", "timestamp");

  return (
    <div className="contentProjects">
      {/** This is the title */}
      <Title
        text={"My Projects"}
        subtext={`Here you will find the two biggest projects I built throughout my
          career, like CamiDental, which was a collaborative project with other
          people and SorBurgers app, the other ones were built on my own in my
          spare time, by self-learning.`}
      />

      {/** Here will go all my projects */}
      <div className="flex relative items-center overflow-auto mt-10 flex-nowrap gap-4 px-5 lg:px-0">
        {data.map(
          ({ id, data: { name, description, github, languages, live } }) => (
            <CardProjects
              key={id}
              name={name}
              description={description}
              github={github}
              languages={languages}
              live={live}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
