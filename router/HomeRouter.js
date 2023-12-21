import express from 'express';
import urlRouter from '../router/UrlRouter.js';
import User from '../router/UserRouter.js'
const router = express.Router();

// call Url Router
router.use('/url',urlRouter);

// call User Router
router.use('/user',User)


export default router;