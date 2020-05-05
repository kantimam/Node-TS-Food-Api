import express from 'express';
import { getRecipe } from './db';

const app = express();
const port = 3000;

getRecipe();

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('something went wrong...', error.message);
});

app.use((req, res, next) => {
  Math.random() > 0.5 ? res.status(206) : res.status(404);
  next();
});

app.use((req, res, next) => {
  next();
});


app.get('/', (req, res, next) => {

  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
