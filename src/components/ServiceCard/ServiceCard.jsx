import React from "react";

function ServiceCard(props) {
	return (
		<div className="service-item">
			<div className="service-item__description">
				<h3 className="service-item__title">{props.title}</h3>
				<p className="service-item__about">{props.description}</p>
			</div>
			<img
				className="service-item__image"
				src={props.img}
				alt={`${props.title} изображение`}
			/>
		</div>
	);
}

export default ServiceCard;
