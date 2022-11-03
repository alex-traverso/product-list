import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

    // Actions de redux
import { addNewProductAction } from '../actions/actionsProducts';

const NewProduct = () => {
    
    let navigate = useNavigate();

    //state del componente
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");


    // usar use dispatch y crea una nueva funcion

    const dispatch = useDispatch();

    // acceder al state del store
    const loading = useSelector( ( state ) => state.products.loading );
    const error = useSelector( ( state ) => state.products.error);

    // mandar a llamar el action de product action
    const addProduct = (product) => dispatch(addNewProductAction (product));

    // cuando el usuario haga submit
    const submitNewProduct = e => {
        e.preventDefault();

        // validar formulario
        if (name.trim() === "" || price <= 0) {
            return;
        }

        // si no hay errores
        // crar nuevo producto
        addProduct( {
            name,
            price
        } );
        
        //redireccionar a inicio
        navigate('/');
    }


    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo Producto</h2>

                <form
                onSubmit={submitNewProduct}
                >
                    <div className='form-group'>
                        <label>Nombre producto</label>
                        <input
                            type="text" 
                            className='form-control'
                            placeholder="Nombre Producto"
                            name="name"
                            value={name}
                            onChange = {e => setName(e.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Precio producto</label>
                        <input
                            type="number"
                            className='form-control'
                            placeholder="0"
                            name="price"
                            value={price}
                            onChange = {e => setPrice(Number(e.target.value))}
                        />
                    </div>

                    <button
                        type='submit'
                        className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>Agregar
                    </button>
                </form>
                {loading ? <p>Cargando...</p> : null}
                {error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> : null}
            </div>
        </div>
    </div>
</div>
                    
)
}

export default NewProduct;