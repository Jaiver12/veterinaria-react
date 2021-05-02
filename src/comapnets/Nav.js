import React from 'react';
function Nav() {
  return (
  	<>
  		 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		      <div className="container-fluid">
		        <a className="navbar-brand" href="index.html">Veterinacia</a>
		        <button className="navbar-toggler"
			        type="button"
			        data-bs-toggle="collapse"
			        data-bs-target="#navbarSupportedContent"
			        aria-controls="navbarSupportedContent" aria-expanded="false"
			        aria-label="Toggle
			        navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarSupportedContent">
		          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
		            <li className="nav-item">
		              <a className="nav-link active" aria-current="page" href="index.html">Mascotas</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="veterinarios.html">Veterinari@s</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="consultas.html">Consultas</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="duenos.html">Dueños</a>
		            </li>
		          </ul>
		          <form className="d-flex">
		            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
		            <button className="btn btn-outline-success" type="submit">Search</button>
		          </form>
		        </div>
		      </div>
		    </nav>
	</>
  );
}

export default Nav;