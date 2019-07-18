import React, { useState, useEffect } from 'react'
import Niveles from './Niveles'
import Loading from './Loading'




export default function NivelesList() {

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

        <section className="row">
            {
                loading && <Loading />
            }

            {
                loading == false && niveles.map(item => <Niveles {...item} key={item.id} />)
            }
        </section>

    )
}
