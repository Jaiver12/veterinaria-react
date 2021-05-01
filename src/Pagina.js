import React, { Component } from 'react';
import Nav from './comapnets/Nav';
import ActionMenu from './comapnets/ActionMenu';
import Table from './comapnets/Table';
import Modal from './comapnets/Modal';

class Pagina extends Component {
	constructot(props){
		this.state = {};
	}

	listarEntidad = () => {
		const { entidad } = this.props;
	}

	render() {
		const { titulo = "Pagina sin titulo" } = this.props;
		return (
			<>
				<div className="container">
					<Nav />
					    <div className="container">
						    <ActionMenu titulo={titulo}/>
						    <Table />
						    <Modal />
						</div>
				</div>
			</>
			);
	}

}

export default Pagina;