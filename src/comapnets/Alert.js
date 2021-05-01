import React from 'react';
function Alert({ alertSwitch = ()=>{} }) {
	return (
		<>
		 <div className="alert alert-danger alert-dismissible mt-2" role="alert">
	         <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
	        <button
		        type="button"
		        className="btn-close"
		        data-bs-dismiss="alert"
		        aria-label="Close"
		        onClick={alertSwitch}
	        ></button>
	      </div>
		</>
		);
}

export default Alert;