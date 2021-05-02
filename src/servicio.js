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