import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO } from "../../types";

const ProyectoState = props =>{
    const initialState= {
        proyectos : [
            {id:1, nombre: 'Juan'},
            {id:2, nombre: 'disparcir'},
            {id:3, nombre:'Tareas del hogat'},
            {id:4, nombre:'Casa de papel'},
        ],
        nuevoProyecto : true
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //funciones para el CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                nuevoProyecto: state.nuevoProyecto,

                //funciones
                mostrarFormulario
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}
export default ProyectoState;