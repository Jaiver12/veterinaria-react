import React, { useState } from 'react';
import EncabezadoTable from './EncabezadoTable';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
function Table() {
		const [mascotas, setMascotas] = useState([
			{
				tipo: "Perro",
				nombre: "Manchas",
				dueno: "jose"
			},
			{
				tipo: "Gato",
				nombre: "Pacho",
				dueno: "jorge"
			}
		]);

		const columnas =mascotas.length > 0 ? Object.keys(mascotas[0]) : [];
  return (
  	<>
  		<table className="table mt-2">

  			<EncabezadoTable columnas={columnas}/>

	        <tbody id="lista-mascotas">
	        	{" "}
	        	{mascotas.map((mascota, index) => <tr>
		        <th scope="row">{index}</th>
		        <td>{mascota.tipo}</td>
		        <td>{mascota.nombre}</td>
		        <td>{mascota.dueno}</td>
		        <td>
		          <button type="button" className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
		          	<FontAwesomeIcon icon={faEdit} />
		          </button>
		          <button type="button" className="btn btn-sm btn-danger">
		          	<FontAwesomeIcon icon={faTrashAlt} />
		          </button>
		        </td>
		    </tr>)}
	        </tbody>
	      </table>
  	</>
  );
}

export default Table;