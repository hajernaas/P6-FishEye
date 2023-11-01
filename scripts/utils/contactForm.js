/*******************************************************************
 * Ce fichier contient toutes les fonctions nécessaires pour afficher
 * et masquer un modal de contact accessible et  aussi de valider les champs de formulaire
 ***************************************************************************/

// Eléments DOM
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOpenBtn = document.querySelector(".contact-button");
const mainWrapper = document.getElementById("main");
const modal = document.querySelector(".contact-modal");
const headerWrapper = document.querySelector(".header-photographer");
const bodyHide = document.createElement("div");
document.body.appendChild(bodyHide);

//EventListener lié au bouton "contactez-moi"
modalOpenBtn.addEventListener("click", displayModal);
/* cette fonction  permet d'afficher le modal*/
function displayModal() {
	// Et ouvrir la modale via un attribut aria-hidden=”false”
	modal.setAttribute("aria-hidden", "false");
	modal.style.display = "block";
	// Masquer le contenu de l’ensemble de la page, en dehors de la modale, via un attribut aria-hidden=”true”
	mainWrapper.setAttribute("aria-hidden", "true");
	headerWrapper.setAttribute("aria-hidden", "true");

	modal.focus();

	/*headerWrapper.setAttribute("tabindex", "-1");
	mainWrapper.setAttribute("tabindex", "-1");*/

	modalCloseBtn.focus();
	modalCloseBtn.setAttribute("tabindex", "0");

	bodyHide.style.display = "block";
	bodyHide.classList.add("modal-display");
	bodyHide.setAttribute("tabindex", "-1");
}

//EventListener lié au bouton close "X"
modalCloseBtn.addEventListener("click", closeModal);
/* cette fonction permet  de masquer le modal*/
function closeModal() {
	modal.setAttribute("aria-hidden", "true");
	modal.style.display = "none";

	const bodyHide = document.querySelector(".modal-display");
	bodyHide.classList.remove("modal-display");

	// la modale est fermée et son contenu est caché  par les technologies d'assistance, et celui de la page doit être visible.
	mainWrapper.setAttribute("aria-hidden", "false");
	headerWrapper.setAttribute("aria-hidden", "false");
	bodyHide.removeAttribute("tabindex");

	/*headerWrapper.removeAttribute("tabindex");
	mainWrapper.removeAttribute("tabindex");*/
}

//Fermer la modale avec la touche “échap”
document.addEventListener("keydown", (e) => {
	if ((e.key === "Escape" || e.key === 27) && modal.getAttribute("aria-hidden") == "false") {
		closeModal();
	}
});

//cette fonction permet de valider les champs de la formulaire
//et de Retourner vrai si toutes les données sont valides, faux sinon.
export function validationForm() {
	//Récupération des élements DOM
	const form = document.querySelector(".formModal");
	const firstName = document.querySelector("#firstName");
	const lastName = document.querySelector("#lastName");
	const email = document.querySelector("#email");
	const message = document.querySelector("#message");
	//Expressions Régulières
	const LastFirstRegex = new RegExp("^[A-zÀ-ú -]{2,15}$");
	const emailRegex = new RegExp("^[a-zA-Z0-9_. -]+@[a-zA-Z0-9_. -]+[.]{1}[a-zA-Z]{2,10}$");
	const regexMessage = new RegExp("^[A-ZÀ-úa-z0-9 -]{20,200}$");

	/**cette fonction permet de tester si les champs inputs suivants (prénom, nom, email,message)
	 * correspondent à un format bien déterminé.Elle retourne 'true' si l'entrée est correcte
	 * si non elle retourne false avec un message d'erreur qui doit s'afficher sous le champ
	 * associé en prenant en compte l'accessibilité
	 */

	function RegexInputs(input, regex, errorMsg, errorClass) {
		//fonction trim () permet de retirer les blancs en début et fin de chaîne
		const value = input.value.trim();
		if (regex.test(value)) {
			errorClass.classList.add("errormessage");
			input.setAttribute("aria-invalid", "false");
			input.setAttribute("aria-describedby", "");
			return true;
		} else {
			errorClass.classList.remove("errormessage");
			input.setAttribute("aria-invalid", "true");
			input.setAttribute("aria-describedby", errorMsg);
			return false;
		}
	}

	//Écouter un événement "change" avec addEventListener sur les champs inputs
	// Et appeler la fonction RegexInputs pour la vérification
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

	//validation du formulaire et Gestion de l'événement submit pour valider le formulaire
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		let isvalid;
		isvalid = RegexInputs(firstName, LastFirstRegex, "errorFirstName", errrorMsgFirstName);
		isvalid = RegexInputs(lastName, LastFirstRegex, "errorLastName", errrorMsgLastName) && isvalid;
		isvalid = RegexInputs(email, emailRegex, "errorMessageEmail", errrorMsgEmail) && isvalid;
		isvalid = RegexInputs(message, regexMessage, "errorMessageContact", errrorMessage) && isvalid;

		if (isvalid) {
			console.log("First Name:", firstName.value);
			console.log("Last Name:", lastName.value);
			console.log("Email:", email.value);
			console.log("Message:", message.value);
			closeModal();
			form.reset();
		}
	});
}

validationForm();
