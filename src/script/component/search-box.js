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
        <form class="navbar-form navbar-left">

        <div class="form-outline">
          <input class="form-control col-lg-8" placeholder="Search Cocktails" id="searchElement" type="search"> 
          </button>
        </div>

        <div class="button">
        <button id="searchButtonElement" class="btn btn-primary btn-lg" type="submit">Search</button>
        </div>

      </form>
      `;

      this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-box", SearchBox);