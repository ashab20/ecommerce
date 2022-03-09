const express = require('express');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const Error =  require('./middleWare/error');
const CookieParser = require('cookie-parser');
const adminRouter = require('./routes/adminRoutes');
const app = express();

app.use(express.json());
app.use(CookieParser());

//? product routes
app.use('/api',productRouter);

//? user routes
app.use('/user',userRouter);

// ! Admin Routes
app.use('/admin',adminRouter);

// ! ErrorHander
app.use(Error);

module.exports = app;