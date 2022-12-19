import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_PRODUCTS_DOWNLOAD,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_EDIT_PRODUCT,
  START_EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";

import axiosClient from "../config/axios";
import Swal from "sweetalert2";

// Crear nuevos productos
export function addNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      // insertar la API
      const response = await axiosClient.post("/productos", product);
      // si todo sale bien, actualizar el state
      dispatch(addProductSuccess(response.data));

      //Alerta de success
      Swal.fire("Correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      // si hay error, cambiar el state
      dispatch(addProductError(true));

      //Alerta de error
      Swal.fire(
        "Error",
        "El producto no se pudo agregar correctamente",
        "error"
      );
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

// si el producto se guarda en la base de datos
const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

// si hubo un error
const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

//Funcion que descarga los productos de la base de datos
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());

    try {
      // insertar la API
      const response = await axiosClient.get("/productos");
      dispatch(downloadProductsSuccess(response.data));
    } catch (error) {
      dispatch(downloadProductsError());
    }
  };
}

const downloadProducts = () => ({
  type: START_PRODUCTS_DOWNLOAD,
  payload: true,
});

// si la descarga es exitosa
const downloadProductsSuccess = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products,
});

const downloadProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});

// selecciona y elimina el producto
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));

    try {
      await axiosClient.delete(`/productos/${id}`);
      dispatch(deleteProductSuccess());

      // si se elimina, mostrar alerta
      Swal.fire(
        "Eliminado!",
        "El producto se ha eliminado correctamente.",
        "success"
      );
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());
    }
  };
}

const getProductDelete = (id) => ({
  type: GET_PRODUCT_DELETE,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});

//colocar producto en edicion
export function getEditProduct(product) {
  return (dispatch) => {
    dispatch(getEditProductAction(product));
  };
}

const getEditProductAction = (product) => ({
  type: GET_EDIT_PRODUCT,
  payload: product,
});

//editar un registro en la api y state
export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct());

    try {
      await axiosClient.put(`/productos/${product.id}`, product);
      dispatch(editProductSuccess(product));
    } catch (error) {
      console.log(error);
      dispatch(editProductError());
    }
  };
}

const editProduct = (product) => ({
  type: START_EDIT_PRODUCT,
});

const editProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
});

const editProductError = (product) => ({
  type: EDIT_PRODUCT_ERROR,
  payload: true,
});
