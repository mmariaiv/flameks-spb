import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import BuildEmployees from "../../images/build_employees.png";
import SelfEmployees from "../../images/home.png";
import Factory from "../../images/factory.png";
import Setting from "../../images/man_and_tubes.png";
import PlanningProcess from "../../images/planning.png";
import Tubes from "../../images/tubes.png";

function Services() {
	return (
		<section className="services">
			<ServiceCard
				title="Строительным заказчикам"
				description="Для крупных жилых, административных и&nbsp;промышленных зданий и&nbsp;сооружений&nbsp;Вы можете заказать полный комплекс работ по&nbsp;оснащению Вашего объекта инженерными системами (от&nbsp;проектирования до&nbsp;монтажа и&nbsp;сервисного обслуживания), либо привлечь нас только на&nbsp;определенном этапе строительства инженерных систем."
				img={BuildEmployees}
				id="building"
			/>
			<ServiceCard
				title="Частным заказчикам"
				description="Мы&nbsp;готовы предложить решения различного уровня сложности как для индивидуальных загородных объектов строительства (коттеджей, загородных домов), так и&nbsp;для инженерных сетей и&nbsp;кондиционирования городских квартир, офисов, коттеджей."
				img={SelfEmployees}
			/>
			<ServiceCard
				title="Планирование"
				description="Высокий уровень квалификации и&nbsp;богатый профессиональный опыт сотрудников нашей компании позволяют создавать инженерные системы, соответствующие самым строгим требованиям наших заказчиков."
				img={PlanningProcess}
				id="planning"
			/>
			<ServiceCard
				title="Обслуживание"
				description="Наша экспертиза включает осмотр и обслуживание инженерных сетей, кондиционеров, и другого оборудования."
				img={Setting}
				id="handling"
			/>
			<ServiceCard
				title="Поставка оборудования"
				description="Компания ФЛАМЕКС СПБ является представительством компании FLAMEX на&nbsp;территории северо-западного округа и&nbsp;предлагает противопожарное оборудование систем вентиляции и&nbsp;другие компоненты от&nbsp;ведущего производителя."
				img={Tubes}
				id="delivery"
			/>
		</section>
	);
}

export default Services;
