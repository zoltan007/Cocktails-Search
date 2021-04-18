import '../component/cocktails-name.js';

import '../component/search-box.js';

import DataSource from '../data/data-source.js';

const main = () => {

    const searchElement = document.querySelector("search-box");
    const cocktailsList = document.querySelector("cocktails-name");
    
    const onButtonSearchClicked = () => {
        DataSource.searchCocktail(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        cocktailsList.cocktails = results;
    };

    const fallbackResult = message => {
        cocktailsList.renderError(message);
    };

   searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
