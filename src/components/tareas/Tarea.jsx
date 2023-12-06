import React from 'react'

const Tarea = (e) => {
  return (
    <li className='flex w-full items-center justify-between'>
        <p>{e.tarea.nombre}</p>
        {e.tarea.estado?
        (        <button className='bg-red-100 px-2 rounded '>
        Incompleto
    </button>):
        (        <button className='bg-green-100 px-2 rounded '>
        Completo
    </button>)
    }
    <div className="m-2 gap-2 flex">
        <button className='bg-gray-800 text-white hover:bg-gray-900 px-3 rounded py-2'>Editar</button>
        <button className='bg-gray-400 hover:bg-gray-300 px-3 rounded py-2'>Eliminar</button>
    </div>

    </li>
  )
}

export default Tarea