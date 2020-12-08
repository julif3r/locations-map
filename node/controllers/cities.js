import { mySqlConnection } from './../connection.js';
let cities = [];

export const getCities = (req, res) => {
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

