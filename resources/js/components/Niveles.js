import React from 'react'
import { Link } from 'react-router-dom'


export default function Niveles(props) {

    const divStyle = {
        width: '400px'
    }

    return (

        <tr >

            <th >{props.nivel ? props.nivel : 'Nombre del nivel '}</th>
            <th >{props.descripcion ? props.descripcion : 'Descripción del nivel'}</th>
            <Link to={'/cursos/niveles/' + props.id} className="btn btn-outline-primary" >
                Ver lecciones
               </Link>
        </tr>

    )
}

