class CocktailsItem extends HTMLElement {
    
    set cocktail(cocktail) {
        this._cocktail = cocktail;
        this.render();
    }

    render() {
        this.innerHTML =`

                <div class="card">
                    <div class="text-center">
                        <img class="picture" src="${this._cocktail.strDrinkThumb}" alt="Avatar" style="width:40%">
                     </div>
                <br>
                    <div class="container">
                        <h4 class="name"><strong>${this._cocktail.strDrink}</strong></h4>
                        <br>
                        <p><strong>Category: </strong>${this._cocktail.strCategory}</p>
                        <p><strong>Glass: </strong>${this._cocktail.strGlass}</p>
                        <p><strong>Ingedients: </strong>${this._cocktail.strIngredient1}, ${this._cocktail.strIngredient2}, ${this._cocktail.strIngredient3}</p>
                        <p><strong>Instructions: </strong>${this._cocktail.strInstructions}</p>
                    </div>
                </div>
        `;
    }
}

customElements.define("cocktails-item", CocktailsItem);
