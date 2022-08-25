import React from 'react'

function Projects() {

  const proyectos = [

    { 
      nombre: "CamiDental", 
      descripcion: "The software helps a dental clinic to manage the appointments with their clients by using the Google Calendar API and all administrative area. ",
      lenguajes: ["C#", "SQL Server", "AWS"]
    },
    { 
      nombre: "SorBurgers App", 
      descripcion: "SorBurgers is a food mobile app, it gives the possibilty of choosing the burger you want, make the order and providing the details of pricing. ",
      lenguajes: ["React Native", "API", "Node.js", "MySQL"]
    },
    { 
      nombre: "Workout App", 
      descripcion: "The purposal of this project was to undertand the basis of the MERN Stack Techology, you can add and have a list of all the workouts you want. ",
      lenguajes: ["Mongodb", "Express.js", "ReactJs", "Node.js"]
    },
    { 
      nombre: "Deliveroo Clone", 
      descripcion: "This is a clone from the real food delivery called Deliveroo, I built it for better understanding of React Native, React Navigation and Redux. ",
      lenguajes: ["React Native", "Redux", "Sanity", "Tailwindcss"]
    },
    { 
      nombre: "Twitter UI Clone", 
      descripcion: "Amazing experience building the clone of Twitter. This one was made to keep practicing with ReactJs library and some other tools. ",
      lenguajes: ["ReactJs", "Firebase", "Styled-components", "MUI"]
    },
    { 
      nombre: "Linkedin UI Clone", 
      descripcion: "Another project to work with the amazing library of ReactJs. Here was my first time implementing Redux for user signup and login. ",
      lenguajes: ["ReactJs", "Firebase", "Redux", "MUI"]
    },
    { 
      nombre: "Slack UI Clone", 
      descripcion: "I enjoyed the built process of this clone, was my first time using firebase hooks and again the Redux Toolkit for user login. ",
      lenguajes: ["ReactJs", "Firebase", "Redux", "MUI", "Styled-components"]
    }
  ]
  
  return (

    <div className='h-auto text-lightWhite p-14'>

      {/** Este es el título */}
      <div className='flex w-full items-center justify-evenly'>
          <hr className='hidden border-1 border-[#F7F8FC] w-1/2 rounded-sm md:block' />
          <h1 className='italic font-[700] text-3xl md:text-center'>My Projects</h1>
      </div>

       {/** Contenido */}
       <div className='md:p-10'>
          <p className='text-xl font-normal mt-12 text-center lg:text-left'>
              Here you will find some significant projects I built throughout my career.
              Also other of them were built from my own for self-taught and to
              increase my knowledge.
          </p>
        </div>
      
      <div className="container relative flex items-center overflow-auto mt-10">
        <div className="flex flex-nowrap gap-4">

          {proyectos.map((item) => (

            <div className="relative flex-none max-w-sm h-80 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className='p-5'>
                  <div className="flex flex-col md:flex-row">
                    <h2 className='flex-1 text-xl text-ligthGray font-semibold'>
                      {item.nombre}
                    </h2>
                    <a href="" className='text-ligthGray hover:text-darkGray transition ease-in-out duration-200 pt-4 md:pt-0'>Enlace de github</a>
                  </div>
                    <p class="mt-5 font-normal dark:text-gray-400 md:p-4">
                      {item.descripcion}
                    </p>

                    <div className="flex flex-col absolute bottom-5 md:flex-row">
                      <div className='flex space-x-4 text-sm dark:text-gray-300 font-normal'>
                        {item.lenguajes.map((lenguaje) => (
                          <p>{lenguaje}</p>
                        ))}
                      </div>
                    </div>
                </div>              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Projects