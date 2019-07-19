import React, { useState, useEffect } from 'react'
import Niveles from './Niveles'
import Loading from './Loading'




export default function NivelesList(props) {

    const [loading, setLoading] = useState(true);

    const [niveles, setNiveles] = useState([]);

    const cargarNiveles = () => {
        let url = `/api/cursos/${props.match.params.id}/nivel`
        axios.get(url)
            .then(resp => {
                setLoading(false)
                setNiveles(resp.data)
            })

            .catch(err => {
                setLoading(false)
                console.log('error al cargar los Nivel')
            })
    }

    useEffect(cargarNiveles, [props.match.params.id])

    return (
        <div className="container">
            <h1 className="display-5 text-center">Lista de Niveles</h1>

            <div className="row">

                <div className="col-md-12">
                    <table className="table table-sm table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr className="text-center">
                                <th>Nivel</th>
                                <th>Descripcion</th>
                                <th>cursos</th>

                            </tr>
                        </thead>
                        <tbody class="table-light">
                            {
                                loading && <Loading />
                            }

                            {
                                loading == false && niveles.map(item => <Niveles {...item} key={item.id} />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
