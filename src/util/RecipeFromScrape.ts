import recipeScraper from 'recipe-scraper';
import Recipe from '../schemas/recipe';


export default (url: string) => {
    return new Promise((res, rej) => {
        if (!url) rej(Error('url cant be empty'));
        recipeScraper(url).then(recipeData => {

            const myRecipe = new Recipe();
            myRecipe.name = recipeData.name;
            myRecipe.servings = recipeData.servings;
            myRecipe.ingredients = recipeData.ingredients;
            myRecipe.instructions = recipeData.instructions.map((element, index) => {
                return { id: index, description: element }
            });
            myRecipe.images = [{ id: 0, path: recipeData.image }]
            myRecipe.time = recipeData.time;
            myRecipe.save().then(() => {
                res();
            }).catch(e => rej(e));
        }).catch(e => rej(e));


    })

}


/* export const parseTimeString = (str: string) => {
    let hourPart: number;
} */