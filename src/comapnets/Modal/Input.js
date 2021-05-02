import React from "react";

function Input({ tipo = "text", nombreCampo, onInput = () => {}, placeholder }) {
	return (
			<div className="col mb-3">
            	<input
	            	type={tipo}
	            	className="form-control"
	            	placeholder={placeholder}
	            	name={nombreCampo}
	            	id={nombreCampo}
	            	onInput={onInput}
            	/>
          	</div>
		);
}

export default Input;