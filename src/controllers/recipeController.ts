import recipeScraper from 'recipe-scraper';
import RecipeFromScrape from '../util/RecipeFromScrape';
import Recipe from '../schemas/recipe';

/* try to scrape recipe url and add it to the database */
export async function scrapeRecipeUrl(req, res) {
    try {
        const u = 'https://www.allrecipes.com/recipe/212721/indian-chicken-curry-murgh-kari/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%203';
        const recipe = await recipeScraper(u);
        res.send(`<pre>${JSON.stringify(recipe, null, 2)}</pre>`);
    } catch (e) {
        console.dir(e);
        res.status(500).send('failed to parse your recipe');
    }
}

/* try to scrape recipe url and add it to the database */
export async function scrapeRecipeUrlTest(req, res) {
    try {
        await RecipeFromScrape(req.query.search);
        res.send('created');
    } catch (e) {
        console.dir(e);
        res.status(500).send('failed to parse your recipe');
    }
}

export async function getRecipes(req, res) {
    try {
        const recipes = await Recipe.find({});
        console.log(recipes);
        res.send(recipes);
    } catch (error) {
        console.log(error);
    }
}

const testRecipe = {
    name: 'Indian Chicken Curry (Murgh Kari)',
    ingredients: [
        '2 pounds skinless, boneless chicken breast halves',
        '2 teaspoons salt',
        '½ cup cooking oil',
        '1 ½ cups chopped onion',
        '1 tablespoon minced garlic',
        '1 ½ teaspoons minced fresh ginger root',
        '1 tablespoon curry powder',
        '1 teaspoon ground cumin',
        '1 teaspoon ground turmeric',
        '1 teaspoon ground coriander',
        '1 teaspoon cayenne pepper',
        '1 tablespoon water',
        '1 (15 ounce) can crushed tomatoes',
        '1 cup plain yogurt',
        '1 tablespoon chopped fresh cilantro',
        '1 teaspoon salt',
        '½ cup water',
        '1 teaspoon garam masala',
        '1 tablespoon chopped fresh cilantro',
        '1 tablespoon fresh lemon juice'
    ],
    steps: [
        { id: 0, description: 'Sprinkle the chicken breasts with 2 teaspoons salt.' },
        { id: 1, description: 'Heat the oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned. Transfer the browned chicken breasts to a plate and set aside.' },
        { id: 2, description: 'Reduce the heat under the skillet to medium-high; add the onion, garlic, and ginger to the oil remaining in the skillet and cook and stir until the onion turns translucent, about 8 minutes. Stir the curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring. Mix the tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt into the mixture. Return the chicken breast to the skillet along with any juices on the plate. Pour 1/2 cup water into the mixture; bring to a boil, turning the chicken to coat with the sauce. Sprinkle the garam masala and 1 tablespoon cilantro over the chicken.' },
        { id: 3, description: 'Cover the skillet and simmer until the chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).  Sprinkle with lemon juice to serve.' }
    ],
    difficulty: 3,
    servings: 6
}

export async function createRecipe(req, res) {
    try {
        const myRecipe = new Recipe(testRecipe);
        await myRecipe.save();
        res.send('succesfully created your recipe');
    } catch (error) {
        console.log(error);
        res.status(500).send('could not save your recipe :(');
    }
}


export default {
    scrapeRecipeUrl
}