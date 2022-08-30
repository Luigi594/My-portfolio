import React, { useEffect, useState } from 'react'
import GridSkills from './GridSkills';
import db from '../Firebase';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';

function Skills() {

  const [stacks, setStacks] = useState([]);

  // retrieving the icons stored in the db
  useEffect(() => {

    const reference = collection(db, "Skills");
    const Query = query(reference, orderBy("number", "asc"))

    onSnapshot(Query, (snapshot) => {

      setStacks(snapshot.docs.map((doc) => ({

        id: doc.id,
        data: doc.data()

      })))
    })

  }, [])

  return (
    <div className='parentContent'>

      {/** This is the title */}
      <div className='titleContent'>
          <h1 className='textContent'>My Skills</h1>
          <hr className='lineContent' />
      </div>

      {/** This is just a little container for some text */}
      <div className='contentDescription'>
        <h2 className='textDescription'>These are some technologies I've worked with:</h2>
      </div>

      {/** Here will go the container for tecnologies */}
      <div className="grid grid-cols-2 p-10 gap-5 md:grid-cols-4">

        {stacks.map(({ id, data: { icon } }) => (

          <GridSkills 
            key={id}
            textIcon={icon} />
        ))}
      </div>
    </div>
  )
}

export default Skills
