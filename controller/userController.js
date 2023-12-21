import User from '../model/User.js';

export default class userController{

   // Add New User
    addUser = async (req,res)=>{
       try{         
          return res.json(await User.create(req.body))
       }catch(err){
          return console.log("There is error ",err);
       }
    }

   //  get All User
    getAllUser = async (req,res)=>{
       try{
          return res.json(await User.find({}))
       }catch(err){
        return console.log("There is error ",err);
       }
    }

   //  for the SignIn User To Use Functionality
    signIn = (req,res)=>{
       return res.json({Message:`${req.user.name} you login Successfully!!!!!`})
    }

   //  for the SignOut
    signOut = (req, res) => {    
      const name=req.user.name;
      req.logout((user => {
          return res.json({ Message: `${name} Logout Successfully!!!!` })
          
      }))

    

  }


}