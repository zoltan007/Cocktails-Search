class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<h3> Cocktails Search </h3>`;
    }
}

customElements.define("nav-bar", NavBar);