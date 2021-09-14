import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

export const AddMotoForm = ({ addMoto }) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (moto, event) => {

        addMoto(moto);
        event.target.reset();
        console.log(moto);
    }

    return (
        <Fragment>
            <form name="miFormulario1" className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="col-xs-2 control-label">Modelo: </label>
                    <div className="col-xs-10">
                        <input type="text" id="idModelo" name="txt_modelo" className="form-control input-xs"
                            {
                            ...register("txt_modelo", {
                                required: {
                                    value: true,
                                    message: 'Campo requerido'
                                }
                            })
                            }
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-2 control-label">Color: </label>
                    <div className="col-xs-10">
                        <input type="text" id="idColor" name="txt_color" className="form-control input-xs"
                            {
                            ...register("txt_color", {
                                required: {
                                    value: true,
                                    message: 'Campo requerido'
                                }
                            })
                            }
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-2 control-label">Marca: </label>
                    <div className="col-xs-10">
                        <input type="text" id="idMarca" name="txt_marca" className="form-control input-xs"
                            {
                            ...register("txt_marca", {
                                required: {
                                    value: true,
                                    message: 'Campo requerido'
                                }
                            })
                            }
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-primary">Añadir moto</button>
            </form>
        </Fragment>
    )
}
