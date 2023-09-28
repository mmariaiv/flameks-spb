import React from "react";
import Promo from "../Promo/Promo";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";

function Main() {
	return (
		<main className="main">
			<Promo />
			<AboutUs />
			<Services />
			<Projects />
		</main>
	);
}

export default Main;
