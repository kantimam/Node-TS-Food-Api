import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import api from './routes/api';

const mongoUri = 'mongodb://127.0.0.1:27017/feed';
const PORT = 5000;

(async () => {
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

    const app = express();

    // Call midlewares
    app.use(cors({ origin: '*' }))


    app.use('/api', api)

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }
  catch (e) {
    console.log(e)
  }

})()


