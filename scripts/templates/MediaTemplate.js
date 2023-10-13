import Video from "../models/Video.js";
import Image from "../models/Image.js";

export default class MediaTemplate {
	constructor(medias, photographer) {
		this.photographer = photographer;
		this.medias = medias;

		/*this.$wrapper = document.createElement("div");
		this.$wrapper.classList.add("main-medias");*/
	}

	/*getTypeMedia() {
		if (this.medias instanceof Video) {
			console.log(this.medias.video);
			const contentMedia = ` <video class="gallery-media" aria-label="${this.medias.alt}">
            <source src="./assets/images/${this.photographer.name}/${this.medias.video}" type="video/mp4">
            </video> `;
			return contentMedia;
		} else if (this.medias instanceof Image) {
			console.log(this.medias.image);
			const contentMedia = ` <img class="gallery-media" src="./assets/images/${this.photographer.name}/${this.medias.image}" alt="${this.medias.alt}">`;
			return contentMedia;
		}
	}*/

	getMediaCardDOM() {
		//const mediaCard = document.querySelector(".main-medias");
		//const sectionMedia = document.querySelector(".gallery");
		const article = document.createElement("article");
		article.classList.add("gallery-card");

		//const contentMedia=this.medias instanceof Video ?``

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
                        <button class="btn_like" type="button" aria-label="Like" data-id="${this.medias.id}">
                            <span class="fas fa-heart" aria-hidden="true"></span>
                        </button> 
                    </div>
            </figcaption>
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
                       <button class="btn_like" type="button" aria-label="Like" data-id="${this.medias.id}">
                           <span class="fas fa-heart" aria-hidden="true"></span>
                       </button> 
                   </div>
           </figcaption>
      `;
		}

		/*
		const content = `   <article class="gallery-card">
           <a href="#" data-media=${this.medias.id} role="link" aria-label="View media large">
               <figure>${contentMedia}</figure>
           </a>
           <figcaption>
               <h2>${this.medias.title}</h2>
                   <div role="group" aria-label="Like button and number of likes">
                       <span class="nbLike">${this.medias.likes}</span> 
                       <button class="btn_like" type="button" aria-label="Like" data-id="${this.medias.id}">
                           <span class="fas fa-heart" aria-hidden="true"></span>
                       </button> 
                   </div>
           </figcaption>
       </article> `;*/

		/*sectionMedia.innerHTML = contentMedia;*/
		return article;
		//sectionMedi.innerHTML = content;

		//return content;
	}
}
