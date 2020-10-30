const User = require('../models/users');
const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');
const bodyParser = require('body-parser');

const data=require('../Data/data');
module.exports = {
    
    readAll (req,res) {
        User.find().then( (users) =>{
             res.send(users)
        });
    },
    createuser(req,res){
        
        if (req.body.nom==''||req.body.prenom==''||req.body.email==''||req.body.Password==''){
            res.render("inscription")
            console.log("wtf dude")
        }else{
        const user=new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            Password:req.body.Password
        })
        console.log(req.body);
        user.save(); 
        res.redirect('/');}
    },
    deleteuser(req,res){
        User.findOneAndRemove({ email: req.body.email}).then(()=>{
            console.log("delete");
            res.redirect('/')
        })
    },
    findAndLog(req,res){
        User.findOne({email: req.body.email}).then((user)=>{
        //bcrypt.compare(password,this.local.password)
        if(user!== null){
            bcrypt.compare(req.body.Password,user.Password,(function(error,same){
                if(same==true){
                    console.log(user)
                    res.render("profil",{user:user}) // JWT dans ce coin 
                }
                else{
                    res.send(error)
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
