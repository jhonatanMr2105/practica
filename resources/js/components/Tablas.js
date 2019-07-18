import React from 'react'
import TableItem from './TableItem'

const Tablas = ()=>{
    return(
        <div className="table-respponsive">
            <table className="table table-striped tabla-inverse">
                <thead className="thead-inverse">
                    <tr>
                        <th> ENCABEZADO 1</th>
                        <th> ENCABEZADO 2</th>
                        <th> ENCABEZADO 3</th>


                    </tr>

                </thead>
                <tbody>
                    {
                        [1,2,3,4,5].map(item => {
                            return <TableItem key={item}/>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Tablas
