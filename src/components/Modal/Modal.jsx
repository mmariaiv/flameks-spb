import React from "react";
import ReactModal from "react-modal";

function Modal(props) {
	return (
		<ReactModal
			className="modal"
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
		>
			<div className="modal__container">
				<button
					className="modal__close-btn"
					onClick={props.onRequestClose}
				></button>
				<div className="modal__info">
					<h3 className="modal__title">{props.card?.title}</h3>

					<p className="modal__text">{props.card?.about}</p>
				</div>
				<img
					src={props.card?.modalUrl}
					alt={props.card?.alt}
					className="modal__image"
				/>
			</div>
		</ReactModal>
	);
}

export default Modal;
