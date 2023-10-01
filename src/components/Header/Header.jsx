import React from "react";
import headerLogo from "../../images/main_logo.svg";

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<img className="logo" src={headerLogo} alt="Логотип Фламекс СПБ" />
			</div>
			<p className="header__link"></p>
		</header>
	);
}

export default Header;
