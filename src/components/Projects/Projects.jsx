import React from "react";
import { cardsList } from "../../utils/constants";
import Modal from "../Modal/Modal";

function Projects() {
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	const [openedCardInfo, setOpenedCardInfo] = React.useState({});

	function openModal(card) {
		setModalIsOpen(true);
		setOpenedCardInfo(card);
	}

	function closeModal() {
		setModalIsOpen(false);
		setOpenedCardInfo({});
	}

	return (
		<>
			<section className="projects">
				<h2 className="projects__title">Наши проекты</h2>
				<div className="projects__table">
					{cardsList.map((card, key) => {
						if (!card.isSkipped) {
							return (
								<div className="projects__table-item" key={key}>
									<button
										className="projects__btn"
										onClick={() => {
											openModal(card);
										}}
									>
										<img
											src={card.url}
											className="projects__image"
											alt={card.alt}
										/>
									</button>
								</div>
							);
						} else {
							return <div className="projects__table-item" key={key}></div>;
						}
					})}
				</div>
			</section>

			<Modal
				isOpen={modalIsOpen}
				card={openedCardInfo}
				onRequestClose={closeModal}
			/>
		</>
	);
}

export default Projects;
