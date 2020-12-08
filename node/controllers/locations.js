import { mySqlConnection } from './../connection.js';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

let locations = [];

export const getLocations = (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, data) => {
        if(error){
            res.sendStatus(403);
        }else{
            mySqlConnection.query('SELECT * from locations', (error, rows, fields) => {
                if(error){
                    console.log(error);
                }else{
                    locations = rows;
                    res.send(locations);
                }
            });
        }
    });
}

export const createLocation = (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, data) => {
        if(error){
            res.sendStatus(403);
        }else{
            let location = req.body;
            location = { id: uuidv4(), ...location };

            let locationValues = Object.values(location);

            mySqlConnection.query('INSERT INTO locations ( id, name, address, city, latitude, longitude) values ( ? )', [locationValues], (error, rows, fields) => {
                if(error){
                    console.log(error);
                    res.send(error);
                }else{
                    res.send(`Location with name ${location.name} has been added to database!`);
                }
            });
        }
    });
        
}

export const getLocationById = (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, data) => {
        if(error){
            res.sendStatus(403);
        }else{
            const { id } = req.params;
            let foundLocation;
            mySqlConnection.query('SELECT * FROM locations WHERE id = ?',[req.params.id], (error, rows, fields) => {
                if(error){
                    console.log(error);
                }else{
                    foundLocation = JSON.parse(JSON.stringify(rows[0]));
                    res.send(foundLocation);
                }
            });
        }
    });
}

export const deleteLocation = (req, res ) => {
    jwt.verify(req.token, 'secretkey', (error, data) => {
        if(error){
            res.sendStatus(403);
        }else{
            const { id } = req.params;
            console.log(id);
            mySqlConnection.query('DELETE FROM locations WHERE id = ?',[req.params.id], (error, rows, fields) => {
                if(error){
                    console.log(error);
                }else{
                    res.send(`Location with id ${id} has been removed from database!`);
                }
            }); 
        }
    });
}

export const updateLocation = (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, data) => {
        if(error){
            res.sendStatus(403);
        }else{
            const { id } = req.params;
            const { name, address, city, latitude, longitude } = req.body;
            
            let location = {
                name : '',
                address : '',
                city : 1,
                latitude : '',
                longitude : ''
            };

            if(name) location.name = name;
            if(address) location.address = address;
            if(city) location.city = city;
            if(latitude) location.latitude = latitude;
            if(longitude) location.longitude = longitude;

            mySqlConnection.query('UPDATE locations SET name = ?, address = ?, city = ?, latitude = ?, longitude = ? WHERE id = ?', [ location.name, location.address, location.city, location.latitude, location.longitude, id ], (error, rows, fields) => {
                if(error){
                    console.log(error);
                }else{
                    res.send(`User with id ${id} has been updated!`);
                }
            }); 
        }
    });
}
