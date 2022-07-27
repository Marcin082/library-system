import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config';
import bookRoutes from './routes/Book';
import authorRoutes from './routes/Author';
import clientRoutes from './routes/Client';
import rentalRoutes from './routes/Rental';
const cors = require("cors");
const router = express();
router.use(cors());
router.use(express.json());
router.use(express.static('public'))
router.use(express.urlencoded({ extended: true }));
mongoose
 .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
 .then(() => {
     console.log('Mongo connected successfully.');
     StartServer();
 })
 .catch((error) => console.log(error));


const StartServer = () => {
router.use('/books', bookRoutes);
router.use('authors', authorRoutes);
router.use('/clients', clientRoutes);
router.use('/rentals', rentalRoutes);
router.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));
http.createServer(router).listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
}
