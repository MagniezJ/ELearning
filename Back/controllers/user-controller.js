const User = require('../models/users');
const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken')
module.exports = {
    
    readAll (req,res) {
        User.find().then( (users) =>{
             res.send(users)
        });
    },
    createuser(req,res){
        console.log(req.body);
        const user=new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            Password:req.body.Password
        })
        user.save(); 
    },
    deleteuser(req,res){
        User.findOneAndRemove({prenom:"Justine"}).then(()=>{
            console.log("delete");
        })
    },
    findAndLog(req,res){
        User.findOne({email: req.body.email}).then((user)=>{
        console.log(user);
        //bcrypt.compare(password,this.local.password)
        if(user!== null){
            bcrypt.compare(req.body.Password,user.Password,(function(error,same){
                console.log(user.Password)
                console.log(req.body.Password)
                console.log(same)
                console.log(error)
                if(same==true){
                    res.send("connexion reussie") // JWT dans ce coin 
                }
                else{
                    res.send("Mauvais mot de passe")
                }
                if(error != undefined){
                    res.send("code erreur :"+error)
                }
            }))
            
        }else{
            res.sendStatus(401).send('Utilisateur non reconnu')
        }});
    },
    AddCategory(req,res){
        User.findOne({email: req.body.email}).then((user)=>{ //middleware qui check user 
            if(user!== null){
                bcrypt.compare(req.body.Password,user.Password,(function(error,same){
                    if(same){
                        User.findOneAndUpdate({Category:user.Category},{Category:req.body.Category}).then(()=>{ //a revoir
                        console.log("update"+user.Category)
                    })
                }
                else{
                    res.send("Mauvais mot de passe")
                }
                if(error != undefined){
                    res.send("code erreur :"+error)
                }
            }))
    } }
        )},
        inscription(req,res){
            res.render('inscription');
        },
        
}
