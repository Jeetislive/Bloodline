import express from 'express';
import authRoute from './authRoute.js';
import stateCityRoute from './stateCityRoute.js';

const indexRoute = express.Router();

indexRoute.use('/state-city',stateCityRoute);
indexRoute.use('/auth',authRoute);


export default indexRoute;