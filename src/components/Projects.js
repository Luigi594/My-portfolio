import React, { useEffect, useState } from 'react'
import db from '../Firebase';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import CardProjects from './CardProjects';

function Projects() {

  const [projects, setProjects] = useState([]);

  // pulling the projects from the db
  useEffect(() => {
    
    const reference = collection(db, "Projects");
    const Query = query(reference, orderBy("timestamp", "asc"));

    onSnapshot(Query, (snapshot) => {

      setProjects(snapshot.docs.map((doc) => ({

        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])
  
  return (

    <div className='h-auto text-darkBlue dark:text-lightWhite lg:p-14'>

      {/** This is the title */}
      <div className='flex w-full items-center justify-evenly pt-12'>
          <hr className='hidden border-1 border-[#878A99] dark:border-[#F7F8FC] w-1/2 rounded-sm md:block' />
          <h1 className='italic font-[700] text-3xl md:text-center'>My Projects</h1>
      </div>

       {/** This is just a container for some text */}
       <div className='p-5 lg:p-10'>
          <p className='text-xl font-normal mt-10 text-center lg:text-left'>
              Here you will find some significant projects I built throughout my career.
              Also other of them were built from my own for self-taught and to
              increase my knowledge.
          </p>
        </div>
      
      {/** Here will go all my projects */}
        <div className="flex relative items-center overflow-auto mt-12 flex-nowrap gap-4 px-5 lg:px-0">

          {projects.map(({ id, data: { name, description, github, languages } }) => (

            <CardProjects 
            
              key={id}
              name={name}
              description={description}
              github={github}
              languages={languages}
            />
          ))}
        </div>
    </div>
  )
}

export default Projects