import './cocktails-item.js';

class CocktailsName extends HTMLElement {
    set cocktails(cocktails) {
        this._cocktails = cocktails;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this._cocktails.forEach(cocktail => {
            const cocktailElement = document.createElement("cocktails-item");
            cocktailElement.cocktail = cocktail
            this.appendChild(cocktailElement);
        })
    }

}

customElements.define("cocktails-name", CocktailsName);