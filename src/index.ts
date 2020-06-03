import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import api from './routes/api';

const PORT = 5000;

// Connects to the Database -> then starts the express
createConnection()
  .then(async _connection => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    app.use(cors({ origin: '*' }))


    app.use('/api', api)



    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(error => console.log(error));

