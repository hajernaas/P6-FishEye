import Video from "../models/Video.js";
import Image from "../models/Image.js";

export default class MediaTemplate {
	constructor(medias, photographer) {
		this.photographer = photographer;
		this.medias = medias;
	}

	getMediaCardDOM() {
		const article = document.createElement("article");
		article.classList.add("gallery-card");

		if (this.medias instanceof Video) {
			console.log(this.medias.video);
			article.innerHTML = `   
            <a href="#" data-media=${this.medias.id} role="link" aria-label="View media large">
                <figure>
                
                <video class="gallery-media" >
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

		if (this.medias instanceof Image) {
			console.log(this.medias.image);
			article.innerHTML = `    
       
           <a href="#" data-media=${this.medias.id} role="link" aria-label="View media large">
               <figure>
               
               <img class="gallery-media" src="./assets/images/${this.photographer.name}/${this.medias.image}" >
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

	getFooterPhotographer() {
		const photographFooter = `
        <aside>
        <p class="photographer_Likes">
            <span class="photographer_likes_count" id="likes-count"></span>
            <span class="fa-solid fa-heart" aria-hidden="true"></span>
        </p>
        <span>${this.photographer.price}€ / jour</span>
       </aside>`;

		const containerFooter = document.querySelector(".container-likes-price");
		containerFooter.innerHTML = photographFooter;
	}
}
