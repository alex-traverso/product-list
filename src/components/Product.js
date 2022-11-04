import React from 'react';
import { Link } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import {deleteProductAction} from '../actions/actionsProducts';


const Product = ( { product } ) => {

    const { name, price, id } = product;

    const dispatch = useDispatch();

    const confirmDeleteProduct = (id) => {
    //preguntar al usuario
        
        
    //pasarlo al action
        dispatch( deleteProductAction( id ) );
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'> $ {price}</span></td>
            <td className='actions'>
                <Link to={`/productos/editar/${id}`} className='btn btn-primary mr-2'>Editar</Link>
                <button type="button" className="btn btn-danger" onClick={() => confirmDeleteProduct(id)}>
                Eliminar
                </button>
            </td>
            
        </tr>
    )
}

export default Product;