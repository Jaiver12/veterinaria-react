import React from "react";

function Select({
	options = [],
	nombreCampo = "vacio",
	placeholder,
	onChange = () => {},
}) {
	return (
			<div className="col mb-3">
	            <select id="tipo" className="form-select" aria-label="Default select example" onChange={onChange} name={nombreCampo} >
	            	<option value=''>Seleccione {placeholder}</option>
	            	{options.map(({ valor, etiqueta }, index) => (
	            		<option
	            			key={`${nombreCampo}-${index}-${valor}-${etiqueta}`}
	            			value={valor}
	            		>
	            			{etiqueta}
	            		</option>
	            	))}
	            </select>
	        </div>
		);
}

export default Select;