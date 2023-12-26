import express,{Router} from 'express';
import {getAll} from '../Controller/Controller';
const UserRouter:Router=express.Router();


/* User level Routes */
UserRouter.get('/',getAll);

export default UserRouter;