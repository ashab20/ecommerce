const express = require('express');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const Error =  require('./middleWare/error')
const app = express();

app.use(express.json())

//? product routes
app.use('/api',productRouter);

//? user routes
app.use('/user',userRouter);

// ! ErrorHander
app.use(Error);

module.exports = app;