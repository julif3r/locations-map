import mySql from 'mySql';

// creating mysql connection
export const mySqlConnection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'locations'
});

mySqlConnection.connect((error)=>{
    if(!error){
        console.log('Database connection succeed');
    }else{
        console.log('Database connection failed \n Error: ' + JSON.stringify(error, undefined, 2));
    }
});
