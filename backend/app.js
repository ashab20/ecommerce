const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRouters');
const Error =  require('./middleWare/error');
const CookieParser = require('cookie-parser');
const adminRouter = require('./routes/adminRoutes');
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(CookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//? product routes
app.use('/api',productRouter);

//? user routes
app.use('/user',userRouter);

// ! Admin Routes
app.use('/admin',adminRouter);

// ! New Order
app.use('/data', orderRouter);

// ! ErrorHander
app.use(Error);

module.exports = app;