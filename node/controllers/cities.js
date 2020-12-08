import { mySqlConnection } from './../connection.js';
import jwt from 'jsonwebtoken';

let cities = [];

export const getCities = (req, res) => {

    jwt.verify(req.token, 'secretkey', (error, data) => {
        if(error){
            res.sendStatus(403);
        }else{
            mySqlConnection.query('SELECT * from cities', (error, rows, fields) => {
                if(error){
                    console.log(error);
                    res.send(error);
                }else{
                    cities = rows;
                    res.send(cities);
                }
            });
        }
    });
}

