import React from "react";
import GBU from "../../images/gbu.png";
import MeatProcessing from "../../images/meat_processing.png";
import MariupolAirport from "../../images/mariupol.png";
import NevskyTownHall from "../../images/nevsky_town_hall.png";
import VictoryPlaza from "../../images/victory_plaza.png";
import Mitkovo from "../../images/railwaystation_platform.png";
import Kutuzovo from "../../images/moscow_platform.png";
import Bank from "../../images/bank_building.png";

function Projects() {
	return (
		<section className="projects">
			<h2 className="projects__title">Наши проекты</h2>
			<div className="projects__table">
				<div className="projects__table-item ">
					<button className="projects__btn">
						<img src={GBU} className="projects__image" alt="" />
					</button>
				</div>
				<div className="projects__table-item">
					<button className="projects__btn">
						<img
							src={MariupolAirport}
							className="projects__image"
							alt="Аэропорт Мариуполя"
						/>
					</button>
				</div>
				<div className="projects__table-item">
					<button className="projects__btn">
						<img
							src={Mitkovo}
							className="projects__image"
							alt="Митьково Станция"
						/>
					</button>
				</div>
				<div className="projects__table-item">
					<button className="projects__btn">
						<img
							src={MeatProcessing}
							className="projects__image"
							alt="Мясной комбинат"
						/>
					</button>
				</div>
				<div className="projects__table-item"></div>
				<div className="projects__table-item">
					<button className="projects__btn">
						<img
							src={VictoryPlaza}
							className="projects__image"
							alt="Виктори плаза"
						/>
					</button>
				</div>
				<div className="projects__table-item">
					<button className="projects__btn">
						<img
							src={Kutuzovo}
							className="projects__image"
							alt="Кутузово станция"
						/>
					</button>
				</div>
				<div className="projects__table-item">
					<button className="projects__btn">
						<img src={Bank} className="projects__image" alt="ЦБ РФ" />
					</button>
				</div>
				<div className="projects__table-item">
					<button className="projects__btn">
						<img
							src={NevskyTownHall}
							className="projects__image"
							alt="Невская ратуша"
						/>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Projects;
