import React from 'react'
import { Link } from 'react-router-dom'


export default function Niveles(props) {

    const divStyle = {
        width: '400px'
    }

    return (
        <div className="card m-2 " style={divStyle}>

            <div className="card-body">
                <h2 className="card-title">{props.nivel ? props.nivel : 'Nombre del Nivel '}</h2>
                <p className="card-text">{props.descripcion ? props.descripcion : 'Descripción del nivel'}</p>
                {/* <a href="#" className="btn btn-outline-primary">Tomar curso</a> */}
                <Link to={'/niveles/' + props.id} className="btn btn-outline-primary" >
                    Tomar nivel
                </Link>

            </div>
        </div>
    )
}

