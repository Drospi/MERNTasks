import React from 'react'

const Barra = () => {
  return (
    <header className='h-20 flex w-full bg-gray-900'>
        <div className='text-white flex my-auto mx-4 w-full justify-between'>
        <p>Hola <span className='font-bold'>Somebody</span></p>
        <nav>
            <a href="#!">Cerrar Sesion</a>
        </nav>
        </div>
    </header>
  )
}

export default Barra