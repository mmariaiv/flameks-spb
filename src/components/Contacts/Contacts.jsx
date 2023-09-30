import React from "react";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";

function Contacts() {
	const [contactData, setContactData] = React.useState({
		name: "",
		phone: "",
		email: "",
	});
	const { values, handleChange, errors, isValid, resetForm } =
		useFormWithValidation();

	function handleSubmit(evt) {
		evt.preventDefault();

		console.log(values);
		setContactData({
			name: values.name,
			phone: values.phone,
			email: values.email,
		});
		return JSON.stringify(contactData);
	}

	React.useEffect(() => {
		resetForm();
	}, [resetForm]);

	React.useEffect(() => {
		console.log(isValid, errors);
	}, [isValid, errors]);

	return (
		<section className="contacts">
			<h2 className="contacts__title">Связаться с нами</h2>
			<div className="contacts__info-container">
				<p className="contacts__subtitle">
					Если у&nbsp;вас возникли вопросы или вы&nbsp;хотите обсудить ваш
					проект, свяжитесь с&nbsp;нашей командой экспертов. Мы&nbsp;будем рады
					помочь вам!
				</p>
				<form className="contact-us" noValidate onSubmit={handleSubmit}>
					<label className="contact-us__form-label">
						<input
							className="contact-us__input"
							name="name"
							id="name-input"
							placeholder="ФИО"
							minLength="3"
							type="text"
							required
							onChange={handleChange}
						></input>
						<span className="contact-us__input-error">{errors.name}</span>
					</label>
					<label className="contact-us__form-label">
						<input
							className="contact-us__input"
							name="phone"
							id="phone-input"
							placeholder="Телефон"
							minLength="10"
							type="text"
							required
							onChange={handleChange}
						></input>
						<span className="contact-us__input-error">{errors.phone}</span>
					</label>
					<label className="contact-us__form-label">
						<input
							className="contact-us__input"
							name="email"
							id="email-input"
							placeholder="Почта"
							minLength="2"
							type="text"
							required
							onChange={handleChange}
						></input>
						<span className="contact-us__input-error">{errors.email}</span>
					</label>
					<button
						className="contact-us__submit-btn"
						type="submit"
						disabled={!isValid}
					>
						Отправить
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contacts;
