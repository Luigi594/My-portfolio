import React, { useEffect, useState } from "react";
import db from "../Firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import CardProjects from "./CardProjects";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);

  // pulling the projects from the db
  useEffect(() => {
    const reference = collection(db, "Projects");
    const Query = query(reference, orderBy("timestamp", "asc"));

    onSnapshot(Query, (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="contentProjects">
      {/** This is the title */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="titleContent">
        <hr className="lineContent" />
        <h1 className="textContent">My Projects</h1>
      </motion.div>

      {/** This is just a container for some text */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="contentDescription">
        <p className="textDescription">
          Here you will find the two biggest projects I built throughout my
          career, like CamiDental, which was a collaborative project with other
          people and SorBurgers app, the other ones were built on my own in my
          spare time, by self-learning.
        </p>
      </motion.div>

      {/** Here will go all my projects */}
      <div className="flex relative items-center overflow-auto mt-12 flex-nowrap gap-4 px-5 lg:px-0">
        {projects.map(
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
