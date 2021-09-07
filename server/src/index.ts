import cors from 'cors';
import express from 'express';
import routes from './api/api';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8000);
