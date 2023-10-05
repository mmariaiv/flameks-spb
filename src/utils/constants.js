import GBU from "../images/gbu.png";
import MeatProcessing from "../images/meat_processing.png";
import MariupolAirport from "../images/mariupol.png";
import NevskyTownHall from "../images/nevsky_town_hall.png";
import VictoryPlaza from "../images/victory_plaza.png";
import Mitkovo from "../images/railwaystation_platform.png";
import Kutuzovo from "../images/moscow_platform.png";
import Bank from "../images/bank_building.png";
import gbuModal from "../images/gbu_modal.jpg";
import MariupolModal from "../images/maariupol_modal.jpg";
import MeatModal from "../images/meat_processing_modal.png";
import MitkovoModal from "../images/mitkovo_modal.jpg";
import NevskyModal from "../images/nevsky_town_hall_modal.png";
import PlazaModal from "../images/victory_plaza_modal.png";
import KutuzovoModal from "../images/kutuzovo_modal.png";
import BankModal from "../images/bank_building_modal.png";
import MgteModal from "../images/mgte.jpg";
import Mgte from "../images/mgte_main.png";

export const regexPhoneValidation =
	/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export const cardsList = [
	{
		url: GBU,
		title: "ГБОУ ДОД СДЮШОР Пушкинского района",
		alt: "ГБОУ Пушкинского района",
		modalUrl: gbuModal,
		about:
			"Реконструкция здания Санкт-Петербургского ГБОУ ДОД СДЮШОР Пушкинского района",
	},

	{
		url: MariupolAirport,
		title: "Здание вокзала г. Мариуполь",
		alt: "Вокзал Мариуполя",
		modalUrl: MariupolModal,
		about:
			"Реконструкция Здания Вокзала г. Мариуполь Монтаж систем отопления, вентиляции, кондиционирования, водоснабжения и канализации.",
	},
	{
		url: Mitkovo,
		title: "Митьково МЦД-4",
		alt: "Митьково Станция",
		modalUrl: MitkovoModal,
		about: "Строительство нового остановочного пункта Митьково (МЦД-4)",
	},
	{
		url: MeatProcessing,
		title: "Протвинский мясокомбинат",
		alt: "Мясной комбинат",
		modalUrl: MeatModal,
		about:
			"В новом производственно-складском здании выполнен монтаж систем вентиляции, отопления, водоснабжения, канализации и спринклерного водяного пожаротушения.",
	},
	{
		url: Mgte,
		title: "Московский государственный театр Эстрады",
		alt: "Театр эстрады",
		modalUrl: MgteModal,
		about:
			"В здании театра был проведен монтаж систем вентиляции и кондиционирования. ",
	},
	{
		url: VictoryPlaza,
		modalUrl: PlazaModal,
		title: "Victory Plaza",
		alt: "Виктори плаза",
		about: "Компанией Фламекс СПБ выполняется монтаж систем отопления.",
	},
	{
		url: Kutuzovo,
		modalUrl: KutuzovoModal,
		title: "Кутузово МЦД-4",
		alt: "Кутузово станция",
		about: "Произведено строительство Железнодорожной станции КУТУЗОВО (МЦД-4)",
	},
	{
		url: Bank,
		modalUrl: BankModal,
		title: "Северо-западное ГУ ЦБ РФ ",
		alt: "ЦБ РФ",
		about:
			"В Северо-Западном управлении ЦБ РФ выполнен монтаж и проведены пуско-наладочные работы систем холодоснабжения трех серверных. ",
	},
	{
		url: NevskyTownHall,
		modalUrl: NevskyModal,
		title: "БЦ Невская Ратуша",
		alt: "Невская ратуша",
		about:
			"Компанией Фламекс СПБ ведется монтаж систем отопления и теплоснабжения корпуса 4.",
	},
];
