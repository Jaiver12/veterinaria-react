import React from "react";

function Select({ options = [], nombreCampo = "vacio" }) {
	return (
			<div className="col mb-3">
	            <select id="tipo" className="form-select" aria-label="Default select example">
	            	<option value=''>Seleccione {nombreCampo}</option>
	            	{options.map(({ valor, etiqueta }, index) => (
	            		<option key={`${nombreCampo}-${index}-${valor}-${etiqueta}`} value="{valor}">{etiqueta}</option>
	            	))}
	            </select>
	        </div>
		);
}

export default Select;