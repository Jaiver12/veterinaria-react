import React from 'react';
function ActionMenu({ titulo }) {
  return (
  	<>
  		<h2 className="pt-3 pb-2">{titulo}</h2>
  		<div className="btn-menu">
	      <button
		      type="button"
		      className="btn btn-sm btn-primary"
		      data-bs-toggle="modal"
		      data-bs-target="#exampleModal"

	      >
	        Nuevo
	      </button>

    	</div>
  	</>
  );
}

export default ActionMenu;
