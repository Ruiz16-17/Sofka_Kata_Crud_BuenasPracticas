import React from 'react'

function TablaMotos({motos=[]}) {
    return (
    <>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Matricula</th>
                <th scope="col">Modelo</th>
                <th scope="col">Color</th>
                <th scope="col">Marca</th>
                </tr>
            </thead>
            <tbody>
                
                {motos.lengt>0
                        
                    ?motos.map(moto=>{
                        <tr>
                            <th scope="row">{moto.matricula}</th>
                            <td>{moto.modelo}</td>
                            <td>{moto.color}</td>
                            <td>{moto.marca}</td>
                        </tr>
                    }):<tr><td className="text-center" colspan="4"  >No existen motos aún</td></tr>
                }
                
            </tbody>
        </table>
    </>
    )
}

export default TablaMotos
