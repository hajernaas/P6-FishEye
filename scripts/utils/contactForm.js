/*******************************************************
 * Ce fichier contient toutes les fonctions nécessaires
 * pour afficher et masquer la modal de contact
 ******************************************************* */
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOpenContact = document.querySelector(".contact_button");

modalOpenContact.addEventListener("click", displayModal);
function displayModal() {
	console.log("appel displayModal ");
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

modalCloseBtn.addEventListener("click", closeModal);
function closeModal() {
	console.log("close Modal");
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
}
