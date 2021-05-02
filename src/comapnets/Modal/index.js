import React from 'react';
import ModalHeader from "./ModalHeader";
import Select from "./Select";
import Input from "./Input";

const tiposMascotas = [
	{
		valor: "Perro",
		etiqueta: "Perro",
	},
	{valor: "Gato", etiqueta: "Gato"},
	{valor: "Hanster", etiqueta: "Hanster"},
	{valor: "Otro", etiqueta: "Otro"},
];

const duenos = [
              	{
	              	valor: "Esteban",
	              	etiqueta: "Esteban",
              	},
				{valor: "Julian", etiqueta: "Julian"},
				{valor: "Yolimar", etiqueta: "Yolimar"},
				{valor: "Jaiver", etiqueta: "Jaiver"},
              ];

function Modal({ manejarInput = () => {}, crearEntidad = () => {} }) {
  return (
  	<>
  		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		        <div className="modal-dialog">
		          		<div className="modal-content">

		          			<ModalHeader />

				            <div className="modal-body">
				             		<form action="" id="form">
				             		 	<input type="hidden" id="indice" />
				                		<div className="form-row">

							                  <Select
							                  	  nombreCampo="tipo"
								                  options={tiposMascotas}
								                  placeholder="Tipo animal"
								                  onChange={manejarInput}
							                   />

							                  <Input nombreCampo="nombre" tipo="text" onInput={manejarInput} placeholder="nombre"/>

							                  <Select
							                  	  nombreCampo="dueno"
								                  options={duenos}
								                  placeholder="el dueño"
								                  onChange={manejarInput}
							                   />

				                		</div>
				             		</form>
				            </div>

				            <div className="modal-footer">
				              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>

				              <button
					              type="button"
					              id="btn-guardar"
					              data-bs-dismiss="modal"
					              className="btn btn-primary"
					              onClick={crearEntidad}
				              >
				              	Crear
				              </button>
				            </div>
		          	</div>
		        </div>
			</div>
  	</>
  );
}

export default Modal;