import db from './knex';



export type Recipe = {
    recipe_name: string,
    recipe_description: string,
    recipe_id?: number
}


const Recipes = db<Recipe>('recipes');

export async function getRecipe() {
    const recipe = await Recipes.first();
    console.log(recipe);

}

export async function createRecipe(recipe: Recipe) {
    console.log(recipe)
    return Recipes.insert({
        recipe_name: 'another test',
        recipe_description: 'another desc'
    }).returning('recipe_name');
}

export type Ingredient = {

}

/* export async function createIngredient(ingredient: Ingredient){

} */


export default getRecipe