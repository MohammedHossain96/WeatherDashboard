import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';
// Import the routes
import routes from './routes/index.js';
import htmlRoutes from './routes/htmlRoutes.js';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
app.use(express.static(path.join(__dirname, '../../client/dist')));
// TODO: Implement middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO: Implement middleware to connect the routes
// app.use(routes);
app.use(routes);
app.use(htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
