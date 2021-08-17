import express from 'express';
import swaggerUI from 'swagger-ui-express';

import swaggerDoc from './docs/documentation.json';
import { usersRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use('/users', usersRoutes);

export { app };
