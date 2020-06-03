import express from 'express';
import { scrapeRecipeUrl, getRecipes, createRecipe, scrapeRecipeUrlTest } from '../controllers/recipeController';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('welcome to my recipe api :)')
})

router.get('/recipes', getRecipes)


router.post('/recipe', createRecipe)

router.get('/scrape', scrapeRecipeUrl);

router.get('/scrapetest', scrapeRecipeUrlTest);


export default router;