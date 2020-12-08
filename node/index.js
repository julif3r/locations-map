import express from 'express';
import bodyParser from 'body-parser';
import locationsRoutes from './routes/locations.js';
import citiesRoutes from './routes/cities.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
//starting the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


// //defining api base route
app.get('/api', (req, res) => {
     res.json({
          message: "Welcome to api"
     });
});

app.post('/api/login', (req, res) => {
     const user = req.body;
     if(user.username == 'admin' && user.password == 'admin'){
          jwt.sign(({ user: user }), 'secretkey', (error, token) => {
               res.json({
                    user: user,
                    token: token
               });
          });
     }else{
          res.json({
               message: 'Login attempt failed, username or password is invalid'
          })
     }
     
});

//defining locations routes
app.use('/api/locations', verifyToken, locationsRoutes);

//defining cities routes
app.use('/api/cities',  verifyToken, citiesRoutes);

// //defining server base route
app.use('/', (req, res) => {
     res.json({
          message: "Welcome to api"
     });
});

function verifyToken(req, res, next){
     const bearerHeader = req.headers['authorization'];

     if(typeof bearerHeader !== 'undefined'){
          const bearer = bearerHeader.split(' ');
          const bearerToken = bearer[1];
          req.token = bearerToken;
          next();

     }else {
          res.sendStatus(403);
     }
}

