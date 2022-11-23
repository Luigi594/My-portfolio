import React, { useEffect, useState } from "react";
import GridSkills from "./GridSkills";
import db from "../Firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { motion } from "framer-motion";
import Title from "./Content/Title";

function Skills() {
  const [stacks, setStacks] = useState([]);

  // retrieving the icons stored in the db
  useEffect(() => {
    const reference = collection(db, "Skills");
    const Query = query(reference, orderBy("number", "asc"));

    onSnapshot(Query, (snapshot) => {
      setStacks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="parentContent">
      {/** This is the title */}
      <Title
        direccionLeft={true}
        text={"My Skills"}
        subtext={"These are some technologies I've worked with:"}
      />

      {/** Here will go the container for tecnologies */}
      <div className="grid mx-auto grid-cols-2 p-10 max-w-6xl md:grid-cols-4">
        {stacks
          ?.slice(0, stacks.length / 2)
          .map(({ id, data: { icon, title } }) => (
            <GridSkills key={id} textIcon={icon} title={title} />
          ))}

        {stacks
          ?.slice(stacks.length / 2, stacks.length)
          .map(({ id, data: { icon, title } }) => (
            <GridSkills key={id} textIcon={icon} title={title} direcctionLeft />
          ))}
      </div>
    </div>
  );
}

export default Skills;
