import React from "react";

function Input({ tipo:"text", nombreCampo }) {
	return (
			<div className="col mb-3">
            	<input
	            	type={tipo}
	            	className="form-control"
	            	placeholder={nombreCampo}
	            	name={nombreCampo}
	            	id={nombreCampo}
            	/>
          	</div>
		);
}

export default Input;