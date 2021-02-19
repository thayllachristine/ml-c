import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import searchController from './controllers/search.controller';
import detailsController from './controllers/details.controller';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(searchController);
app.use(detailsController);

app.listen(port, () => console.log(`listening on ${port}! 🚀`));
