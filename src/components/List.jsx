import React, { useContext, useEffect } from 'react';
import Store from '../store/store';
import consumer from './consumer/consumer';


const List = () => {

    const { dispatch, state: {moto}} = useContext(Store);
    const currentList = moto.list;
    
    useEffect(() => {
        consumer.list()
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "update-list", list })
            });
        
    }, [dispatch]);

    const onDelete = (id_moto) => {
        consumer.delete(id_moto).then((list) => {
            dispatch({ type: "delete-item", id_moto })
        })
    };

    const onEdit = (moto) => {
        
        dispatch({ type: "edit-item", item: moto })
    };
    
    return (<div>
            <table border="1">
            <thead>
                <tr>
                    <td>Marca</td>
                    <td>Modelo</td>
                    <td>Color</td>
                </tr>
            </thead>
            <tbody>
                {currentList.map((moto) => {
                    return <tr key={moto.id}>
                    <td>{moto.id}</td>
                        <td>{moto.marca}</td>
                        <td>{moto.modelo}</td>
                        <td>{moto.color}</td>
                        <td><button onClick={() => onDelete(moto.id)}>Eliminar</button></td>
                        <td><button onClick={() => onEdit(moto)}>Editar</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>)
}
export default List;