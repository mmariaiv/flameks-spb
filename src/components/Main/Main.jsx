import React from "react";
import Promo from "../Promo/Promo";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

function Main() {
	return (
		<main className="main">
			<Promo />
			<AboutUs />
			<Services />
			<Projects />
			<Contacts />
		</main>
	);
}

export default Main;
