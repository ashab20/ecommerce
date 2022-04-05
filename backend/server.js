/*
? Title: 'Minain server Page' 
* Description: 'mern stack ecommerce poroject'
! Author: 'Ashab Uddin'
* contact: 'ashabuddin34@gmail.com'
* Date: '03/03/2022'
*/


// dependancies
const dotenv = require('dotenv');
dotenv.config({path:'./backend/config/config.env'});
const DatabaseConnection = require('./config/database');

// unhandle cought error
process.on('uncaughtException', (err) =>{
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to the uncounght server error`);
    process.exit(1);
    // like undifine fundtion call
})


// Module scafholding
const app = require('./app');
const PORT = process.env.PORT;


// server connection
const server = app.listen(PORT,() => {
    DatabaseConnection();
    console.log(`Server connected to http://localhost:${PORT}`);
});

// unhadle Promise rejection 
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err}`);
    console.log(`Server shutting down the server due to unhandle promise rejaction`);
    server.close(()=>{
        process.exit(1);
    });
})