import 'reflect-metadata';
import { createConnection, LessThan, MoreThan } from 'typeorm';
import express from 'express';
import cors from 'cors';
import { Recipe } from './entity/Recipe'

const PORT = 5000;

// Connects to the Database -> then starts the express
createConnection()
  .then(async connection => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    app.use(cors({ origin: '*' }))


    // Set all routes from routes folder
    /* app.use('/', routes); */

    app.get('/', (req, res) => {
      res.send('welcome to my api')
    })

    app.get('/api/recipes', async (req, res) => {
      const recipe = await connection.manager.find(Recipe, { id: MoreThan(0) });
      console.log(recipe);

      res.send([{ name: 'asd' }, { name: 'be' }, { name: 'ge' }])
    })

    app.get('/make', async (req, res) => {
      const recipe = new Recipe()
      recipe.name = 'my spicy test';
      recipe.description = 'hopefully working'
      const succ = await connection.manager.save(recipe)
      console.log(succ);
      res.send(succ)
    })

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(error => console.log(error));

