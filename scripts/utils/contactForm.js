/*******************************************************
 * Ce fichier contient toutes les fonctions nécessaires
 * pour afficher et masquer la modal de contact
 ******************************************************* */
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOpenBtn = document.querySelector(".contact-button");
const bodyPhotophrapher = document.getElementById("page-photographer");
const mainWrapper = document.getElementById("main");
const modal = document.querySelector(".contact-modal");

modalOpenBtn.addEventListener("click", displayModal);
/* cette fonction  permet d'afficher le modal*/
function displayModal() {
	console.log("appel displayModal ");
	// Masquer le contenu de l’ensemble de la page, en dehors de la modale, via un attribut aria-hidden=”true”
	mainWrapper.setAttribute("aria-hidden", "true");
	// Et ouvrir la modale via un attribut aria-hidden=”false”
	modal.setAttribute("aria-hidden", "false");
	modal.style.display = "block";
	modalCloseBtn.focus();
}

modalCloseBtn.addEventListener("click", closeModal);
/* cette fonction  permet  de masquer le modal*/
function closeModal() {
	console.log("close Modal");
	// la modale est fermée et son contenu est caché des technologies  d'assistance, et celui de la page doit être visible.
	mainWrapper.setAttribute("aria-hidden", "false");
	modal.setAttribute("aria-hidden", "true");
	modal.style.display = "none";
	//modalOpenBtn.focus();
}

//Fermer la modale avec la touche “échap”
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" || e.key === 27) {
		closeModal();
	}
});

export function validationForm() {
	const form = document.querySelector(".formModal");
	const firstName = document.querySelector("#firstName");
	const lastName = document.querySelector("#lastName");
	console.log("lastname", lastName.value);
	const email = document.querySelector("#email");
	const message = document.querySelector("#message");

	const LastFirstRegex = new RegExp("^[A-zÀ-ú -]{2,15}$");
	const emailRegex = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z0-9_. -]+[.]{1}[a-zA-Z]{2,10}$");
	const regexMessage = new RegExp("^[A-Za-z0-9]{20,200}$");
	//const regexMessage = /^[A-Za-z0-9|\s]{20,200}$/;

	/**cette fonction permet de tester si les champs inputs suivants (prénom, nom, email,message)
	 * correspondent à un format bien déterminé.Elle retourne 'true' si l'entrée est correcte
	 * si non elle retourne false avec un message d'erreur qui doit s'afficher sous le champ associé
	 */

	function RegexInputs(input, regex, errorMsg, errorClass) {
		//let error = false;
		//fonction trim () permet de retirer les blancs en début et fin de chaîne
		const value = input.value.trim();
		//let valueLength = input.value.length;
		console.log("value", value);
		if (regex.test(value)) {
			console.log("test vrai");
			errorClass.classList.add("errormessage");
			//errorClass.style.display = "none";
			input.setAttribute("aria-invalid", "false");
			input.setAttribute("aria-describedby", "");
			return true;
		} else {
			console.log("test faux");
			errorClass.classList.remove("errormessage");
			//msgError.setAttribute("data-error-visible", "true");
			//errorClass.style.display = "block";
			input.setAttribute("aria-invalid", "true");
			input.setAttribute("aria-describedby", errorMsg);

			return false;
		}
	}

	const errrorMsgFirstName = document.getElementById("errorfirstname");
	firstName.addEventListener("change", () => {
		RegexInputs(firstName, LastFirstRegex, "errorFirstName", errrorMsgFirstName);
	});

	const errrorMsgLastName = document.getElementById("errorlastname");
	lastName.addEventListener("change", () => {
		RegexInputs(lastName, LastFirstRegex, "errorLastName", errrorMsgLastName);
	});

	const errrorMsgEmail = document.getElementById("erroremail");
	email.addEventListener("change", () => {
		RegexInputs(email, emailRegex, "errorMessageEmail", errrorMsgEmail);
	});

	const errrorMessage = document.getElementById("errorMsgContact");
	message.addEventListener("change", () => {
		RegexInputs(message, regexMessage, "errorMessageContact", errrorMessage);
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		let isvalid;
		isvalid = RegexInputs(firstName, LastFirstRegex, "errorFirstName", errrorMsgFirstName);
		isvalid = RegexInputs(lastName, LastFirstRegex, "errorLastName", errrorMsgLastName) && isvalid;
		isvalid = RegexInputs(email, emailRegex, "errorMessageEmail", errrorMsgEmail) && isvalid;
		isvalid = RegexInputs(message, regexMessage, "errorMessageContact", errrorMessage) && isvalid;

		if (isvalid) {
			console.log("cccc");
			console.log("First Name:", firstName.value);
			console.log("Last Name:", lastName.value);
			console.log("Email:", email.value);
			console.log("Message:", message.value);
			closeModal();
			//openMsg();
			form.reset();
		}
	});
}

validationForm();
