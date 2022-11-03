import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_PRODUCTS_DOWNLOAD,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR
} from '../types';

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function addNewProductAction(product) {
    return async(dispatch) => {
        dispatch( addProduct() );

        try {
            // insertar la API
            await axiosClient.post( '/productos', product )
            // si todo sale bien, actualizar el state
            dispatch( addProductSuccess( product ) );

            //Alerta de success
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch ( error ) {
            // si hay error, cambiar el state
            dispatch( addProductError( true ) )
            
            //Alerta de error
            Swal.fire(
                'Error',
                'El producto no se pudo agregar correctamente',
                'error'
            )
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})


// si el producto se guarda en la base de datos
const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// si hubo un error
const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
} )

//Funcion que descarga los productos de la base de datos
export function getProductsAction() {
    return async ( dispatch ) => {
        dispatch( downloadProducts() );

        try {
            // insertar la API
            const response = await axiosClient.get( '/productos' );
            dispatch(downloadProductsSuccess(response.data))

        } catch (error) {
            dispatch( downloadProductsError() );
        }
    }
}

const downloadProducts = () => ( {
    type: START_PRODUCTS_DOWNLOAD,
    payload: true
} );

// si la descarga es exitosa
const downloadProductsSuccess = products => ( {
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
} )

const downloadProductsError = () => ( {
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true,
})