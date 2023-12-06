import React, { useContext } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext)
  const {proyectos} = proyectosContext;

  if(proyectos.length === 0) return <p className='text-gray-500 cursor-text'>No hay proyectos, comienza creando uno...</p>
  return (
    <ul>
        {proyectos.map((proyecto)=>{
            return <Proyecto key={proyecto.id} proyecto={proyecto}></Proyecto>
        })}
    </ul>
  )
}

export default ListadoProyectos