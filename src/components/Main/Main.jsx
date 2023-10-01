import React from "react";
import Promo from "../Promo/Promo";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import { useResize } from "../../utils/UseResize";

function Main() {
	const { width } = useResize();

	return (
		<main className="main">
			{width >= 600 && <Promo />}

			<AboutUs />
			<Services />
			<Projects />
			<Contacts />
		</main>
	);
}

export default Main;
