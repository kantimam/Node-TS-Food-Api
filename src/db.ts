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



type Recipe = {
    'recipe_id': number,
    'recipe_name': string,
    'recipe_description': string
}


const Recipes = db<Recipe>('recipes');

export async function getRecipe() {
    const recipe = await Recipes.first();
    console.log(recipe);

}

/* getRecipe(); */



export default getRecipe