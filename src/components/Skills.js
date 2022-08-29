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
    <div className='h-auto text-darkBlue dark:text-lightWhite lg:p-14'>

      {/** This is the title */}
      <div className='flex w-full items-center justify-evenly pt-12'>
          <h1 className='italic font-[700] text-3xl md:text-center'>My Skills</h1>
          <hr className='hidden border-1 border-[#878A99] dark:border-[#F7F8FC] w-1/2 rounded-sm md:block' />
      </div>

      {/** This is just a little container for some text */}
      <div className='flex items-center p-10'>
        <h2 className='text-xl font-normal mt-12 text-center lg:text-left'>These are some technologies I've worked with:</h2>
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
