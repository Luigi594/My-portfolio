import React from "react";
import GridSkills from "./GridSkills";
import Title from "./Content/Title";
import useFetchData from "../hooks/useFetchData";

function Skills() {
  const { data } = useFetchData("Skills", "number");

  return (
    <div className="parentContent">
      {/** This is the title */}
      <Title
        direccionLeft={true}
        text={"My Skills"}
        subtext={"These are some technologies I've worked with:"}
      />

      {/** Here will go the container for tecnologies */}
      <div className="grid mx-auto grid-cols-2 p-10  md:grid-cols-4">
        {data
          ?.slice(0, data.length / 2)
          .map(({ id, data: { icon, title } }) => (
            <GridSkills key={id} textIcon={icon} title={title} />
          ))}

        {data
          ?.slice(data.length / 2, data.length)
          .map(({ id, data: { icon, title } }) => (
            <GridSkills key={id} textIcon={icon} title={title} direcctionLeft />
          ))}
      </div>
    </div>
  );
}

export default Skills;
