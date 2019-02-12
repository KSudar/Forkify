import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';

// Global state of the app
// -search object
// -current recipe object
// -shopping list object
// -liked recipes
const state = {};

//SEARCH CONTROLLER
const controlSearch = async () => {
    // 1) Get query from view
    //const query = searchView.getInput();
    //TESTING
    const query = 'pizza';

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            // 4) Search for recipes
            await state.search.getResult();

            // 5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wronng with the search...');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

//TEST
/* window.addEventListener('load', e => {
    e.preventDefault();
    controlSearch();
}) */

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

//RECIPE CONTROLLER
const controlRecipe = async () => {
    //Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        //Prepare UI for changes

        //Create new recipe object
        state.recipe = new Recipe(id);
        
        //TESTING
        window.r = state.recipe;
        //Get recipe data
        await state.recipe.getRecipe();
        try {
            //Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render recipe
            console.log(state.recipe);
        } catch (err) {
            alert('Error processing recipe!')
        }
    }

}

/* window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe); */
//['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));



























