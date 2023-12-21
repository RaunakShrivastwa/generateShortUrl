import passport from "passport";
import User from '../model/User.js';
import { Strategy as LocalStrategy } from 'passport-local'

// Cheak User Email or Password Valide or not
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user || user.password != password) {
            done(false, null)
            return res.json({ Error: 'Invalide Credential' })
        }
        return done(null, user)
    } catch (err) {
        return console.log("There is error ", err);
    }
}));

// for Serialize The User
passport.serializeUser((user, done) => {
    return done(null, user.id)
});


// for the deserializeUser
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        return done(null, user)
    } catch (err) {
        return console.log("There is error ", err);
    }
});


// for the Cheak Request is  Authenticated or not 
passport.cheakAuthentication = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.json({Error:'Login and Continue ,'})
}

// set SignIn User In local
passport.setAunthenticatedUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user
    }
    return next()
}

export default passport;