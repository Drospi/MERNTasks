import React, {Fragment, useState} from 'react'

const NuevoProyecto = () => {
  const [proyecto, setProyecto]=useState({
    nombre: '',
  });
  const {nombre} = proyecto;

  const onChangeProyecto = (e)=>{
    setProyecto({
      ...proyecto,
      [e.target.name]:e.target.value
    })
  }
  const onSubmitProyecto = (e)=>{
    e.preventDefault()
  }
  return (<Fragment>
    <button type='button' className='text-xl button my-4'>NuevoProyecto</button>
    <form onSubmit={onSubmitProyecto}>
    <div className="flex bg-white items-center border border-gray-300 p-2 rounded">
                    <input required 
                    type="password" 
                    placeholder="Nombre del Proyecto" 
                    id="password" 
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                    className="w-full focus:outline-none"/>
    <i id="eyeIcon" className="fa fa-eye-slash text-gray-500 cursor-pointer hover:text-gray-400"></i>
                </div>
                <div className="my-4">
                <button type="submit" 
                className="bg-gray-800 text-white w-full px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-300">
                  Agregar Proyecto</button>
            </div>
                
    </form>
    </Fragment>
  );
}

export default NuevoProyecto