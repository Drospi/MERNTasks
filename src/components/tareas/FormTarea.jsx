import React from 'react'

const FormTarea = () => {
  return (
    <div className='w-full p-4 bg-gray-600 text-center'>
        <form className='' action="">
            <div className="mb-4">
                <input type="text"
                className='border w-96 rounded py-2 px-3'
                placeholder='Nombre de Tarea...'
                name='nombre'
                 />
            </div>
            <div className="mb-4">
                <input type="submit"
                className='border-none w-96 text-white cursor-pointer bg-gray-900 rounded py-2 px-3'
                value='Agregar Tarea'
                name='nombre'
                 />
            </div>
        </form>
    </div>
  )
}

export default FormTarea