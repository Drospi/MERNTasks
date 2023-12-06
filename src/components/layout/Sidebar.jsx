import React from 'react'

import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'
const Sidebar = () => {
  return (
    <aside className='w-80 h-screen bg-white'>
        <div className='p-4 m-2'>
        <h1 className='text-center font-bold text-3xl'>MERN<span className='font-thin text-black'>Tasks</span></h1>
        <NuevoProyecto></NuevoProyecto>
        <div className="p-4 ">
            <h2 className='font-bold mb-4 text-lg text-center'>Tus Proyectos</h2>
            <ListadoProyectos></ListadoProyectos>
        </div>
        </div>
    </aside>
  )
}

export default Sidebar