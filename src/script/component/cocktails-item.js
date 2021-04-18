class CocktailsItem extends HTMLElement {
    
    set cocktail(cocktail) {
        this._cocktail = cocktail;
        this.render();
    }

    render() {
        this.innerHTML =`

        <div class="card">
        <img class="picture" src="${this._cocktail.strDrinkThumb}" alt="Avatar" style="width:100%">
            <div class="container">
            <h5 class="name">${this._cocktail.strDrink}</h5>
            <p><strong>Category: </strong>${this._cocktail.strCategory}</p>
            <p><strong>Glass: </strong>${this._cocktail.strGlass}</p>
            <p><strong>Instructions: </strong>${this._cocktail.strInstructions}</p>
        </div>
        </div>
        
        `;
    }
}

customElements.define("cocktails-item", CocktailsItem);
