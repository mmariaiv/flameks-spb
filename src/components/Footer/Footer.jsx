import React from "react";

function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<footer className="footer">
			<div className="footer__container">
				{/* <div className="footer__links-container">
					<h3 className="footer__links-title">О нас</h3>
					<ul className="footer__links">
						<li className="footer__link">Компания</li>
						<li className="footer__link">Проекты</li>
						<li className="footer__link">Отзывы</li>
					</ul>
				</div> */}
				<div className="footer__links-container">
					<h3 className="footer__links-title">Контакты</h3>
					<ul className="footer__links">
						<li className="footer__link">+7 (964) 382-52-42</li>
						<li className="footer__link">info@flamexspb.ru</li>
						<li className="footer__link">
							г. Санкт-Петербург, ул. Чугунная, д. 4 литера А, офис 407
						</li>
					</ul>
				</div>
			</div>
			<p className="footer__copyright">
				{`© Фламекс СПБ ${currentYear}. Все права защищены.`}
			</p>
		</footer>
	);
}

export default Footer;
