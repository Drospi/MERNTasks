import React from 'react'

const Proyecto = (e) => {
  return (
    <li>
        <button type='button'
        className='list'>
            {e.proyecto.nombre}
        </button>
    </li>
  )
}

export default Proyecto