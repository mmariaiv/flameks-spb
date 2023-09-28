import React from "react";

function AboutUs() {
	return (
		<section className="about-us">
			<div className="about-us__description">
				<h2 className="about-us__title">О нас</h2>
				<p className="about-us__advert">
					Фламекс&nbsp;&mdash; инженерная компания в&nbsp;Санкт-Петербурге,
					предлагающая комплексные услуги по&nbsp;проектированию, монтажу
					и&nbsp;обслуживанию инженерных систем для зданий и&nbsp;сооружений.
					Мы&nbsp;используем современные материалы, технологии и&nbsp;строго
					следим за&nbsp;соблюдением всех норм и&nbsp;регламентов для гарантии
					высокого качества и&nbsp;надежности ваших проектов.
				</p>
			</div>
			<div className="about-us__service">
				<h2 className="about-us__title">Услуги</h2>
				<div className="about-us__list">
					<p className="about-us__list-item">Стройка</p>
					<hr className="border" />
					<p className="about-us__list-item">Поставка оборудования</p>
					<hr className="border" />
					<p className="about-us__list-item">Обслуживание</p>
					<hr className="border" />
					<p className="about-us__list-item">Планирование</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
