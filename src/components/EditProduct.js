import React from 'react';

function EditProduct() {
    return (
    <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <h2 className="text-center mb-4 mt-4 font-weight-bold">Editar Producto</h2>
                </div>

                <form action="">
                    <div className='form-group'>
                        <label>Precio producto</label>
                        <input
                            type="text" 
                            className='form-control'
                            placeholder="Nombre Producto"
                            name="nombre"
                        />
                    </div>

                    <div className='form-group'>
                        <label>Precio producto</label>
                        <input
                            type="text" 
                            className='form-control'
                            placeholder="Precio Producto"
                            name="precio"
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