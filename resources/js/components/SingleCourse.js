// import React from 'react'
import React, { useState, useEffect } from 'react'
import Loading from './Loading'



const SingleCourse = (props) => {
    const divStyle = {
        width: '400px'
    }


    const loadSingleCourse = () => {
        let url = `/cursos/${props.match.params.id}`
        axios.get(url)
            .then(resp => {
                setCurso(resp.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log('error al cargar el curso')
            })

    }
    const [cursos, setCurso] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(loadSingleCourse, [props.match.params.id])

    if (loading)
        return <Loading />
    return (

        <div className="container nt-5">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        {/* <img
                            src={cursos.imagen ? curso.imagen : 'imgs/148957.jpg'}
                            className="card-img-top" alt="curso de miskito"
                        /> */}
                        <div className="card-body">
                            <h2 className="card-title">
                                {cursos.curso ? cursos.curso : 'Nombre del Curso'}
                            </h2>
                            <p className="card-text">
                                {cursos.descripcion ? cursos.descripcion : 'descripcion del curso'}</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container nt-3">
                <div className="col-sm-12">
                    <div className="card">

                        {/* <div className="card-header"> detalles del curso</div>
                        <div className="card-body"> */}
                        {/* Desarrollado por{cursos.desarrollador.nombres}{cursos.desarrollador.apellido}
                         como no tengo reacionado las tablas desarrollador esta linea de codigo no la ocupare */}

                        Desarrollado por Jhonatan M

                        </div>
                </div>
            </div>

                        Niveles
                               {
                            cursos.niveles.map(niveles => {
                                return (
                                    <h2 key={niveles.id}>{niveles.nivel}</h2>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}

export default SingleCourse
