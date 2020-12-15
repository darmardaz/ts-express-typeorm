import express, { Application } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (_, res) => res.send({ hello: 'world' }));

export default app;
