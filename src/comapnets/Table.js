import React, { useState } from 'react';
import EncabezadoTable from './EncabezadoTable';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
function Table({ entidades = [] }) {
		const columnas =entidades.length > 0 ? Object.keys(entidades[0]) : [];
  return (
  	<>
  		<table className="table mt-2">

  			<EncabezadoTable columnas={columnas}/>

	        <tbody id="lista-mascotas">
	        	{" "}
	        	{entidades.map((entidad, index) => <tr>
		        <th scope="row">{index}</th>
		        <td>{entidad.tipo}</td>
		        <td>{entidad.nombre}</td>
		        <td>{entidad.dueno}</td>
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