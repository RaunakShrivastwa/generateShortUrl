import express from 'express';
import db from './config/db.js';
import router from './router/HomeRouter.js';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore  from 'connect-mongo';
import passport from 'passport';
import passportLocal from './config/passport-local.js'

const app = express();

app.use(bodyParser.json())
app.use(session({
    name: 'Backend',
    secret: 'socialMedia',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongoUrl: 'mongodb://127.0.0.1:27017/Sorter',
            autoRemove: 'disabled'
        },
        function (err) {
            console.log(err || 'connect-mongo db setup ok');
        }
    )
}));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session())
app.use(passport.setAunthenticatedUser)

app.use('/',router)
app.listen(3000,(err)=>{
    if(err){
        return console.log("There is error ",err);
    }
    console.log("Server is up and runnig..... at port 3000")
})