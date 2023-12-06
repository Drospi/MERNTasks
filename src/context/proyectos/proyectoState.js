import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const proyectoState = props =>{
    const initialState= {
        nuevoProyecto : false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //funciones para el CRUD

    return (
        <proyectoContext.Provider
            value={{
                nuevo: state.nuevoProyecto
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}