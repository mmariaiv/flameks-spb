import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function AboutUs() {
	return (
		<section className="about-us">
			<div className="about-us__description">
				<h2 className="about-us__title title">О нас</h2>
				<p className="about-us__advert">
					Фламекс&nbsp;СПБ&nbsp;&mdash; инженерная компания
					в&nbsp;Санкт-Петербурге, предлагающая комплексные услуги
					по&nbsp;проектированию, монтажу и&nbsp;обслуживанию инженерных систем
					для зданий и&nbsp;сооружений. Мы&nbsp;используем современные
					материалы, технологии и&nbsp;строго следим за&nbsp;соблюдением всех
					норм и&nbsp;регламентов для гарантии высокого качества
					и&nbsp;надежности ваших проектов.
				</p>
			</div>
			<div className="about-us__service">
				<h2 className="about-us__title title">Услуги</h2>
				<nav className="about-us__list">
					<Link to="#building" className="about-us__list-item" smooth>
						Строительство
					</Link>
					<hr className="border" />
					<Link to="#delivery" className="about-us__list-item" smooth>
						Поставка оборудования
					</Link>
					<hr className="border" />
					<Link to="#handling" className="about-us__list-item" smooth>
						Обслуживание
					</Link>
					<hr className="border" />
					<Link to="#planning" className="about-us__list-item" smooth>
						Планирование
					</Link>
				</nav>
			</div>
		</section>
	);
}

export default AboutUs;
