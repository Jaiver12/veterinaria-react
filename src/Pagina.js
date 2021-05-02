import React, { Component } from 'react';
import Nav from './comapnets/Nav';
import ActionMenu from './comapnets/ActionMenu';
import Table from './comapnets/Table';
import Modal from './comapnets/Modal';
import { listarEntidad, crearEditarEntidad } from './servicio';

class Pagina extends Component {
	constructor(props) {
		super(props);
		this.state = {
			entidades: [],
			objeto: {},
		};
	}

	listar = async () => {
		const { entidad } = this.props;
		const entidades = await listarEntidad({ entidad });
		this.setState({ entidades });
	};

	manejarInput = (evento) => {
		const { target: { value, name } } = evento;
		let { objeto } = this.state;
		objeto = { ...objeto, [name]: value };
		this.setState({ objeto });
	}

	crearEntidad = async () => {
		const { entidad } = this.props;
		let { objeto } = this.state;
		const method = "POST";
		await crearEditarEntidad({ entidad,  objeto, method });
		this.listar();
	}

	componentDidMount() {
		this.listar();
	}

	render() {
		const { titulo = "Pagina sin titulo" } = this.props;
		return (
			<>
				<div className="container">
					<Nav />
					    <div className="container">
						    <ActionMenu titulo={titulo} />

						    <Table entidades={this.state.entidades} />

						    <Modal
							    manejarInput={this.manejarInput}
							    crearEntidad={this.crearEntidad}
						    />
						</div>
				</div>
			</>
			);
	}

}

export default Pagina;