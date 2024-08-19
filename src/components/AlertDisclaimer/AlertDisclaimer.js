import React from 'react';
import { toast } from 'react-toastify';
import './alertDisclaimer.css';

const AlertDisclaimer = ({ closeToast, setNotified }) => {
	const handleDisclaimer = () => {
		setNotified(window.localStorage.setItem('notified', true));
		toast.clearWaitingQueue();
		closeToast();
	};
	return (
		<div className="disclaimer-container">
			<h2>Bienvenido</h2>
			<p>
				Hola  recuerda que esta pagina la hice 
				como parte de un proyecto y es de solo fines practicos 
			</p>
			<br />
			<button className="disclaimer-btn" onClick={handleDisclaimer}>
				No volver a mostar
			</button>
		</div>
	);
};

export default AlertDisclaimer;
