const API_URL = "http://localhost:5000";

export const listarEntidad = async ( {entidad = "mascotas"} ) => {
	try {
		const respuesta = await fetch(`${API_URL}/${entidad}`);
		const datos = await respuesta.json();
		return datos;
	} catch(e) {
		console.log(e);
	}
};

export const crearEditarEntidad = async ( {
	entidad = "mascotas",
	objeto = {},
	method = "POST",
	idObjeto = null,
} ) => {
	try {
		let url = null;
		if(method === "PUT" && idObjeto){
			url += `${API_URL}/${entidad}/${idObjeto}`;
		} else if (method === "POST") {
			url = `${API_URL}/${entidad}`;
		}

		if (!url) {
			console.log('no cumple creditos de envio');
		}

		const respuesta = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(objeto),
			mode: "cors",
		});
		const datos = await respuesta.json();
		return datos;

	} catch(error) {
		console.log(error);
	}
};