import express from 'express';
import bodyParser from 'body-parser';
import locationsRoutes from './routes/locations.js';
import citiesRoutes from './routes/cities.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//starting the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

//defining locations routes
app.use('/locations',cors(), locationsRoutes);

//defining cities routes
app.use('/cities',cors(), citiesRoutes);

//defining server base route
app.get('/', (req, res) => {
     res.send(`hello from homepage`);
});

