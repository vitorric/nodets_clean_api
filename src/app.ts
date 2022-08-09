/* eslint-disable import/first */
import './core/config';

import express from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import routes from '@infra/http/routes';

const app = express();

const server = createServer(app);

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-type, Accept, Authorization, content-encoding'
    );

    // An example displaying the respective memory
    // usages in megabytes(MB)
    for (const [key, value] of Object.entries(process.memoryUsage())) {
        if (key === 'rss') {
            console.log(`Memory usage by ${key}, ${value / 1000000}MB `)
        }
    }

    next();
});

app.use(
    morgan('dev'),
    express.json({ limit: '1000MB' }),
    express.urlencoded({ limit: '2000MB', extended: true })
);

routes(app);

export default server;
