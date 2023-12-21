import express from 'express';
import userController from '../controller/userController.js';
import passport from 'passport';

const router = express.Router();

// creating object for User Controller class
const user =  new userController();

// for Add New User
router.post('/add',user.addUser)

// for the Get All User
router.get('/getAll',user.getAllUser)

// for the login
router.post('/signIn',passport.authenticate('local',{failureRedirect:'/user/fail'}),user.signIn)

// If SignIn fail
router.get('/fail',(req,res)=> res.json({Error:'Invalide Cradential!!!!'}));

// for the SignOut
router.get('/signOut',user.signOut)


export default router;