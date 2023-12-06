import React from 'react'
import Proyecto from './Proyecto'
const ListadoProyectos = () => {
    const proyectos = [
        {nombre: 'Juan'},
        {nombre: 'disparcir'},
        {nombre:'Tareas del hogat'}
    ]
  return (
    <ul>
        {proyectos.map((proyecto,key)=>{
            return <Proyecto key={key} proyecto={proyecto}></Proyecto>
        })}
    </ul>
  )
}

export default ListadoProyectos