import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import { router } from './routes';
import swaggerFile from './swagger.json';

import dataSource from './database';

dataSource
  .initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    app.use('/api-docs', serve, setup(swaggerFile));

    app.use(router);

    app.listen(3333, '0.0.0.0', () => {
      console.log('Server is running on port 3333');
    });
  })
  .catch((err) => {
    console.error('Error initializing database:', err);
  });
