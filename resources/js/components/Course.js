import React from 'react'
import { Link } from 'react-router-dom'


export default function Course(props) {

    const divStyle = {
        width: '400px'
    }

    return (
        <div className="card m-2 " style={divStyle}>

            <div className="card-body">
                <h2 className="card-title">{props.curso ? props.curso : 'Nombre del curso '}</h2>
                <p className="card-text">{props.descripcion ? props.descripcion : 'Descripción del curso'}</p>
                {/* <a href="#" className="btn btn-outline-primary">Tomar curso</a> */}
                <Link to={'/niveles/' + props.id} className="btn btn-outline-primary" >
                    Tomar Curso
                </Link>

            </div>
        </div>
    )
}

