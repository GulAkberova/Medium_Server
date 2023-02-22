const { User } = require("../models/User")

const userController={
    getAll:(req,res)=>{
        User.find({isDeleted:false})
        .exec((err,docs)=>{
            if(!err) res.json(docs);
            else res.status(500).json(err)
        })
    },
    getSignUp:(req,res)=>{

    },
    getSignIn:(req,res)=>{
        
    }
}

module.exports={
    userController
}