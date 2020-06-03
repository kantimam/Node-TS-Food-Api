import express from 'express';
import { getConnection, getRepository, LessThan, MoreThan } from 'typeorm';
import { Recipe } from '../entity/Recipe'
import { scrapeRecipeUrl } from '../controllers/recipeController';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('welcome to my recipe api :)')
})

router.get('/recipes', async (_req, res) => {
    const repo = getRepository(Recipe);
    const recipe = await repo.find({ id: MoreThan(0) });
    console.log(recipe);

    res.send([{ name: 'asd' }, { name: 'be' }, { name: 'ge' }])
})

router.post('/make', async (_req, res) => {
    const repo = getRepository(Recipe);
    const recipe = new Recipe()
    recipe.name = 'my spicy test';
    recipe.description = 'hopefully working'
    const succ = await repo.save(recipe)
    console.log(succ);
    res.send(succ)
})

router.get('/scrape', scrapeRecipeUrl);

export default router;