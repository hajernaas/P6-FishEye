import Video from "../models/Video.js";
import Image from "../models/Image.js";

// Cette classe permet de créer la section main de la page photographer.html (Medias+tarif journalier+nombre total de likes)
export default class MediaTemplate {
	constructor(medias, photographer) {
		this.photographer = photographer;
		this.medias = medias;
	}

	// Cette méthode permet de créer chaque carte média (vidéo ou image)
	getMediaCardDOM() {
		const article = document.createElement("article");
		article.classList.add("gallery-card");
		// cas vidéo
		if (this.medias instanceof Video) {
			console.log(this.medias.video);
			article.innerHTML = `   
            <a href="#" data-media=${this.medias.id} role="link" aria-label="View video" class="media-card">
                <figure>
                <video class="gallery-media">
                <source src="./assets/images/${this.photographer.name}/${this.medias.video}" type="video/mp4">
                </video> 
                </figure>
            </a>
            <figcaption>
                <h2>${this.medias.title}</h2>
                    <div role="group" aria-label="Like button and number of likes">
                        <span class="nbLike">${this.medias.likes}</span> 
                        <button class="btn-like" type="button" aria-label="Like" data-id="${this.medias.id}">
                        <i class="fa-solid fa-heart" aria-hidden="true"></i>
                        </button> 
                    </div>
            </figcaption>
         
        </div>
        `;
		}
		// cas image
		if (this.medias instanceof Image) {
			console.log(this.medias.image);
			article.innerHTML = `    
       
           <a href="#" data-media=${this.medias.id} role="link" aria-label="View image" class="media-card">
               <figure>
               <img class="gallery-media" src="./assets/images/${this.photographer.name}/${this.medias.image}"  alt="${this.medias.title}" >
               </figure>
           </a>
           <figcaption>
               <h2>${this.medias.title}</h2>
                   <div role="group" aria-label="Like button and number of likes">
                       <span class="nbLike">${this.medias.likes}</span> 
                       <button class="btn-like" type="button" aria-label="Like" data-id="${this.medias.id}">
                           <i class="fa-solid fa-heart" aria-hidden="true"></i>
                          
                       </button> 
                   </div>
           </figcaption>
      `;
		}

		return article;
	}

	//  affiche le tarif journalier du photographe affiché et le nombre totale de likes
	getFooterPhotographer() {
		const photographFooter = `
        <aside>
        <p class="photographer_Likes">
            <span class="photographer-likes-count" id="likes-count"></span>
            <span class="fa-solid fa-heart" aria-hidden="true"></span>
        </p>
        <span>${this.photographer.price}€ / jour</span>
       </aside>`;

		const containerFooter = document.querySelector(".container-likes-price");
		containerFooter.innerHTML = photographFooter;
	}
}
