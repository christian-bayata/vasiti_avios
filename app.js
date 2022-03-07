import 'express-async-errors';
import express from 'express';
import logger from 'morgan';
import { PORT, ENVIRONMENT } from './settings.js';
import healthCheck from './api/v1/routes/healthCheck.js';
import errorMiddleware from './middlewares/error.js';
import products from './api/v1/routes/products.js';
import productVarieties from './api/v1/routes/productVarieties.js';

const app = express();

//Express set-up
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database connection
import './models/index.js';

//Routes
app.use('/api/v1', healthCheck);
app.use('/api/v1', products);
app.use('/api/v1', productVarieties);

//Error Handler Middleware
app.use(errorMiddleware);

let server = app.listen(PORT, () =>
  console.log(`server running on port ${PORT} in ${ENVIRONMENT} mode`)
);

export default server;
