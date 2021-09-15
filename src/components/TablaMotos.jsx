import React from 'react'

function TablaMotos({ motos, editRow }) {

    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Color</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        motos.length > 0 ?
                            motos.map(moto => (
                                <tr>
                                    <th scope="row">{moto.id}</th>
                                    <td>{moto.modelo}</td>
                                    <td>{moto.color}</td>
                                    <td>{moto.marca}</td>
                                    <td>
                                        <button
                                            className="button muted-button"
                                            onClick={() => {
                                                editRow(moto)
                                            }}
                                        >
                                            Edit
                                        </button>
                                        {/* <button
                                            className="button muted-button"
                                            onClick={() => { deleteMoto(moto.id) }}
                                        >
                                            Delete
                                        </button> */}
                                    </td>
                                </tr>
                            ))
                            : <tr><td className="text-center" colSpan="4"  >No existen motos aún</td></tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default TablaMotos
