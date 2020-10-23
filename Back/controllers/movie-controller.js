const Cat = require('../models/category');
const bodyParser = require('body-parser');
const data=require('../Data/data');
const { AddCategory } = require('./user-controller');
module.exports = {
     readBall(req,res) {
        Cat.find().then( (cate) =>
            res.send(cate)
        )
    }, 
    create(req,res){
       console.log(req.body);
        const cat=new Cat({
    TitreCate:req.body.TitreCate,
    photoCaté:req.body.photoCaté,
    
    TitreSSCaté:req.body.TitreSSCaté,
    photoSSCaté: req.body.photoSSCaté,
    VideoSSCaté:req.body.VideoSSCaté,
    Materiel: req.body.Materiel,
    Ingrédient:req.body.Ingrédient,
    Contenu: req.body.Contenu  
    
    })
    cat.save(); 
    },
    test(req,res){
        Cat.findOne({TitreCate:"LOL"}).then((cate)=>{
            console.log(req.body);
            res.send(cate);
        })
    },
    home(req,res){
        res.render('category')
    }
}