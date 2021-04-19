class SearchBox extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    
    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
 

        <div class="d-flex flex-column justify-content-center">
            <input class="form-control col-lg-8" placeholder="Search Cocktails" id="searchElement" type="search"> 
            <br>
            <button id="searchButtonElement" class="btn btn-primary btn-lg justify-content-center" type="submit">Search</button>
        </div>
      `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-box", SearchBox);