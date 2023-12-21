import express from 'express';
import urlController from '../controller/urlController.js';
import passport from 'passport';
import PassportLocal from '../config/passport-local.js'

const router = express.Router();

// creating object for Url Controller
const UrlCon = new urlController();

// for Shortener Original Url and Save Both in DB
router.post('/shortner',passport.cheakAuthentication, UrlCon.sortAndCreate)

// Getting Original Url By Shortener Url
router.get('/get/:shortUrl', passport.cheakAuthentication, UrlCon.getOriginal)

// for the getting All Url
router.get('/getAll',UrlCon.getAllUrl)

export default router;