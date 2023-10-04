/*******************************************************
 * Ce fichier contient toutes les fonctions nécessaires
 * pour afficher et masquer la modal de contact
 ******************************************************* */
function displayModal() {
	console.log("appel displayModal ");
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
	console.log("close Modal");
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
}
