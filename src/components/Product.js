import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//redux
import { useDispatch } from "react-redux";
import {
	deleteProductAction,
	getEditProduct,
} from "../actions/actionsProducts";

const Product = ({ product }) => {
	const { name, price, id } = product;
	const dispatch = useDispatch();
	const navigate = useNavigate(); //habilitar history para redireccion

	const confirmDeleteProduct = (id) => {
		//preguntar al usuario
		Swal.fire({
			title: "¿Estás seguro?",
			text: "Un producto que se elimina no se puede recuperar",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, eliminar!",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				//pasarlo al action
				dispatch(deleteProductAction(id));
			}
		});
	};

	// funcion que redirige de forma programada
	const redirectEdit = (product) => {
		dispatch(getEditProduct(product));
		navigate(`/productos/editar/${product.id}`);
	};

	return (
		<tr>
			<td>{name}</td>
			<td>
				<span className="font-weight-bold"> $ {price}</span>
			</td>
			<td className="actions">
				<button
					type="button"
					onClick={() => {
						redirectEdit(product);
					}}
					className="btn btn-primary mr-2"
				>
					Editar
				</button>
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => confirmDeleteProduct(id)}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
};

export default Product;
