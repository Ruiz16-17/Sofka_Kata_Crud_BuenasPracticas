import React, { useContext, useRef, useState } from 'react';
import Store from '../store/store';
import consumer from './consumer/consumer';

export const FormMoto = () => {

    const formRef = useRef(null);
    const { dispatch, state: { moto } } = useContext(Store);
    const item = moto.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();

        const request = {
            id: null,
            marca: state.marca,
            modelo: state.modelo,
            color: state.color
        };


        consumer.save(request)
            .then(response => response.json())
            .then((moto) => {
                dispatch({ type: "add-item", item: moto });
                setState({ item: {} });
                formRef.current.reset();
            });
    }

    const onEdit = (event) => {
        event.preventDefault();

        const request = {
            id: item.id,
            marca: state.marca,
            modelo: state.modelo,
            color: state.color
        };


        consumer.update(request)
            .then(response => response.json())
            .then((moto) => {
                
                dispatch({ type: "update-item", item: moto });
                setState({ marca: "", modelo: "", color: "" });
                formRef.current.reset();
            });
    }

    return <div>
        <form ref={formRef}>
            <input
                type="text"
                name="marca"
                placeholder="Marca"
                defaultValue={item.marca}
                onChange={(event) => {
                    setState({ ...state, marca: event.target.value })
                }}
            >
            </input>

            <input
                type="text"
                name="modelo"
                placeholder="Modelo"
                defaultValue={item.modelo}
                onChange={(event) => {
                    setState({ ...state, modelo: event.target.value })
                }}
            ></input>

            <input
                type="text"
                name="color"
                placeholder="Color"
                defaultValue={item.color}
                onChange={(event) => {
                    setState({ ...state, color: event.target.value })
                }}
            ></input>

            {item.id && <button onClick={onEdit}>Actualizar</button>}
            {!item.id && <button onClick={onAdd}>Crear</button>}
        </form>
    </div>

}
