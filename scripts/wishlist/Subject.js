/*cette classe observable permet de creér un sujet qui va notifier les Observers */

export default class WishlistSubject {
	constructor() {
		this._observers = [];
	}
	// Il permet à des observateurs de s’abonner .
	subscribe(observer) {
		this._observers.push(observer);
	}
	// Il permet à des observateurs de se désabonner
	unsubscribe(observer) {
		this._observers = this._observers.filter((obs) => obs !== observer);
	}
	// Il permet à des observateurs d'appliquer la méthode fire() afin d’exécuter une action
	fire(action) {
		this._observers.forEach((observer) => observer.update(action));
	}
}
