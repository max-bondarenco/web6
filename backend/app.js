import express from 'express';
import cors from 'cors';

import errorHandler from './utils/errorHandler.js';
import notFound from './utils/notFound.js';
import { calculateTask1 } from './controllers/calculate.controller.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));

app.post('/api/task1', calculateTask1);

app.use(notFound);
app.use(errorHandler);

export default app;
