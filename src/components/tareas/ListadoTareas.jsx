import React, {Fragment} from 'react'
import Tarea from './Tarea'
const ListadoTareas = () => {
    const tareas = [
        {nombre: 'plata',
         estado:false},
        {nombre: 'ceo',
         estado:true},
        {nombre: 'hosting',
         estado:false}
    ]
  return (
    <Fragment>
    <h2>Proyecto: </h2>
    <ul className='m-4'>
        {(tareas.length===0)?(<li>No hay tareas</li>):(
        tareas.map((tarea, key)=>{
            return <Tarea key={key} tarea={tarea}></Tarea>
        }))}
    </ul>
    <button
    type='button'
    className='bg-white border-black px-3 py-2 rounded'>Eliminar Proyecto &times;</button>
    </Fragment>
  )
}

export default ListadoTareas