import mongoose from 'mongoose';

const config = {
    MONGO_HOST: process.env.MONGO_URL || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || '27017',
    MONGO_DB: process.env.MONGO_DB,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS,
};

const url = `mongodb://${config.MONGO_USER}:${config.MONGO_PASS}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}?authMechanism=SCRAM-SHA-1`;

const options: mongoose.ConnectOptions = {
    keepAlive: true,
    connectTimeoutMS: 0,
};

const db = mongoose.createConnection(url, options);

db.once('connected', () => {
    console.log('Mongodb connection', process.env.NODE_ENV);
    return db;
});

db.on('disconnected', () => {
    console.log('connection disconnected');
});

db.on('error', (err) => {
    console.log('Error in mongodb connection: ', err);
});

export default db;
