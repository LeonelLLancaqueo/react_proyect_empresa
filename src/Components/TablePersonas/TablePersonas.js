
import PersonasService from "../../services/PersonasService";
import "./TablePersonas.css";
import React, { useEffect, useState } from "react";


const TablePersonas= (params)=>{

    const [personas, setPersonas]= useState([]);

    useEffect(()=>{
        PersonasService.getPersonas()
        .then(response =>{
            setPersonas(response.data);
            
        }).catch(error =>{
            console.log(error);
        })
    },[]);

    return (
        <table class="table-personas">
            <tr>
                <th>nombre</th>
                <th>apellido</th>   
                <th>dni</th>   
                <th>fecha_nacimiento</th>   
   
            </tr>
            
            
            {
                personas.map(
                    persona =>
                        <tr key={persona.id}>
                              <td>{persona.nombre}</td>  
                              <td>{persona.apellido}</td>  
                              <td>{persona.dni}</td>  
                              <td>{persona.fechaNacimiento}</td>    
                        </tr>
                )
            }
        
        </table>

    )
}

export default TablePersonas;