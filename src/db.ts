import knex = require('knex')
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'kantemir',
        password: 'kantemir',
        database: 'feed'
    }
});



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



export default getRecipe