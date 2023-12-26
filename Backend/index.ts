/* Configurtions & Import Statments*/
import express from 'express';
import dotenv from 'dotenv';
import {connection} from './Helper/DBconnection';
import AdminRouter from './Admin/Routes/Route';
import UserRouter from './User/Routes/Route';
const app=express();
dotenv.config();
connection();

/* Middlewares */
app.use(express.json());

/* Routes */
app.use('/apiv1/admin',AdminRouter);
app.use('/apiv1/user',UserRouter);

/* Server */
const PORT:string | undefined =process.env.PORT;
app.listen(PORT,():undefined=>{
    console.log(`Application is Runnng on PORT NO : ${PORT}`);
});
