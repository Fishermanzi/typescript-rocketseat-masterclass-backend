import express from 'express';
import routes from './routes';

const app = express();
app.use(require('body-parser').json());
app.use(routes);

app.listen(3333);