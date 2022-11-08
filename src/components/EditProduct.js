import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editProductAction} from '../actions/actionsProducts';

function EditProduct() {

    // nuevo state de producto
    const [product, setProduct] = useState( {
        name: "",
        price: ""
    } );


    // producto a editar
    const editProduct = useSelector( state => state.products.editProduct );
    

    //llenar el state automaticamente
    useEffect( () => {
        setProduct( editProduct );
    }, [editProduct] );


    //leer los datos del formulario
    const handleForm = e => {
        setProduct( {
            ...product,
            [e.target.name]: e.target.value
        })
    }


    const { name, price, id } = product;

    const submitEditProduct = e => {
        e.preventDefault();
        editProductAction();
    }



    return (
    <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <h2 className="text-center mb-4 mt-4 font-weight-bold">Editar Producto</h2>
                </div>

                <form
                onSubmit={submitEditProduct}
                >
                    <div className='form-group'>
                        <label>Nombre producto</label>
                        <input
                            type="text" 
                            className='form-control'
                            placeholder="Nombre Producto"
                            name="name"
                            value={name}
                            onChange={handleForm}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Precio producto</label>
                        <input
                            type="number"
                            className='form-control'
                            placeholder="Precio Producto"
                            name="price"
                            value={price}
                            onChange={handleForm}
                        />
                    </div>

                    <button
                        type='submit'
                        className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>Guardar cambios
                    </button>
                </form>
            </div>
    </div>
)
}

export default EditProduct;