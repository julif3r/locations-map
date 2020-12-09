# locations-map


## TO RUN THE PROJECT
#### YOU MUST HAVE
* Installed mysql apache server
* node -version v14.15.1
* Create database with name 'locations' and import `locations.sql`
* On directory `/node/connections.js` you can change mysql credentials
```
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'locations'
```

### RUN SERVER NodeJS
* Run mysql server
* From the /node directory install node modules with command `npm install`
* After Node_modules are installed, execute command to run the server `npm start index.js`

### RUN FRONT_END Angular
* From the /angular directory install node modules with command `npm install`
* After Node_modules are installed, execute command to run and open the project`ng serve --open`,


#### Login user
```
   username: admin
   password: admin
```

### APPLICATION SCREENSHOTS

1. Login page

![alt Homepage](https://github.com/julif3r/locations-map/blob/main/screenshots/login.jpg)

2. List of locations on homepage 

![alt Homepage](https://github.com/julif3r/locations-map/blob/main/screenshots/list-of-locations.jpg)

3. Create location page 

![alt Create](https://github.com/julif3r/locations-map/blob/main/screenshots/create-location.jpg)

4. Update location page 

![alt Homepage](https://github.com/julif3r/locations-map/blob/main/screenshots/update-location.jpg)

5. Single location

![alt Single](https://github.com/julif3r/locations-map/blob/main/screenshots/single-location.jpg)

 
