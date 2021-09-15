import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

export const AddMotoForm = ({ addMoto }) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (moto, event) => {

        addMoto(moto);
        event.target.reset();
    }

    return (
        <Fragment>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Color</label>
                <input type="text"
                    {
                        ...register("color",{
                            required : {
                                value : true,
                                message : 'Campo requerido'
                            }
                        })
                    }
                />
                <div>
                    {errors?.name?.message}
                </div>
                <label>Modelo</label>
                <input type="text"
                    {
                        ...register("modelo",{
                            required : {
                                value : true,
                                message : 'Campo requerido'
                            }
                        })
                    }
                />
                <div>
                    {errors?.name?.message}
                </div>
                <div>
                    {errors?.name?.message}
                </div>
                <label>Marca</label>
                <input type="text" 
                    {
                        ...register("marca",{
                            required : {
                                value : true,
                                message : 'Campo requerido'
                            }
                        })
                    }
                />
                <div>
                    {errors?.name?.message}
                </div>
                <button>Añadir nueva moto</button>
            </form>
        </Fragment>
    )
}
