import React from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormTarea from '../tareas/FormTarea'
import ListadoTareas from '../tareas/ListadoTareas'
const Proyectos = () => {
  return (
    <div className='flex bg-gray-200'>
      <Sidebar></Sidebar>
      <div className='w-full'>
        <Barra></Barra>
        <main>
          <div className="w-full">
            <FormTarea></FormTarea>
            <div className='m-4'>
              <ListadoTareas></ListadoTareas>
            </div>
          </div>
          <div className='mb-4'>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Proyectos