import React, { Component } from 'react';
import Nav from './comapnets/Nav';
import ActionMenu from './comapnets/ActionMenu';
import Table from './comapnets/Table';
import Modal from './comapnets/Modal';
import { listarEntidad } from './servicio';

class Pagina extends Component {
	constructor(props) {
		super(props);
		this.state = {
			entidades: [],
		};
	}

	listar = async () => {
		const { entidad } = this.props;
		const entidades = await listarEntidad({ entidad });
		this.setState({ entidades });
	};

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
						    <ActionMenu titulo={titulo}/>
						    <Table entidades={this.state.entidades} />
						    <Modal />
						</div>
				</div>
			</>
			);
	}

}

export default Pagina;