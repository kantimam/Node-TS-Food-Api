import express, { Request } from 'express';
import formidable from 'express-formidable';
import { getRecipe, createRecipe, Recipe } from './db/db';

const app = express();
const port = 3000;

getRecipe();

app.use(formidable());


app.get('/', (req, res, next) => {
  getRecipe();
  res.send('The sedulous hyena ate the antelope!');
});

type RequestWithRecipe = express.Request & { fields: Recipe }

app.post('/', async (req: RequestWithRecipe, res, next) => {
  try {
    const recipe = await createRecipe(req.fields)
    res.send(recipe);
  }
  catch (e) {
    console.log(e)
    res.send('failed to create');
  }
});


app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
