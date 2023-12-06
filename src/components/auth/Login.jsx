import React, {useState} from 'react'
import { Link } from 'react-router-dom' 
const Login = () => {
  const [usuario, setUsuario] = useState({
    email: '',
    password:''

  })

  const {email, password}= usuario
  const onChange = (e)=>{
    setUsuario({
      ...usuario, [e.target.name]:e.target.value
    })
  }
  const onSubmit = (e)=>{
    e.preventDefault();

  }
  return (
    <div>
      <div className="bg-image-login flex items-center w-full justify-center h-screen">
    <div className="container-login p-8 rounded shadow-md w-80">
        <h2 className="text-md font-semibold mb-6 text-center">Bienvenido Ingresa con tu cuenta</h2>

        <form 
        action="/" 
        method="post"
        onSubmit={onSubmit}>
            <div className="mb-4">
            <div className="flex bg-white items-center border border-gray-300 p-2 rounded">
                    <input 
                     required
                     type="text" 
                     placeholder="Correo" 
                     id="email" 
                     name="email" 
                     value={email}
                     className="w-full focus:outline-none"
                     onChange={onChange}/>
                    <i className="fas fa-envelope text-gray-500"></i>
                </div>
            </div>
            <div className="mb-4">
            <div className="flex bg-white items-center border border-gray-300 p-2 rounded">
                    <input required 
                    type="password" 
                    placeholder="Contrasena" 
                    id="password" 
                    name="password" 
                    value={password}
                    className="w-full focus:outline-none"
                    onChange={onChange}/>
    <i id="eyeIcon" className="fa fa-eye-slash text-gray-500 cursor-pointer hover:text-gray-400"></i>
                </div>
            </div>
            <div className="mb-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Ingresar</button>
            </div>
        </form>
    <Link to={'/nueva-cuenta'} className='text-blue-500'>
      Obtener Cuenta
    </Link>
    </div>
</div>
    </div>
  )
}

export default Login