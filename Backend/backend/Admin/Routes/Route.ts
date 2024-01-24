import express,{Router} from 'express';
import {getAll} from '../Controller/Controller';
const AdminRouter:Router=express.Router();

/* Admin level Routes */
AdminRouter.get('/',getAll);

export default AdminRouter;
