const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const catSchema = new Schema({
   
    TitreCate:{
        type:String,
        enum:["Tarte","Pate","Viennoiserie","entremets","pate a choux","bases"]
    },
    photoCaté:String,
    TitreSSCaté:String,
    photoSSCaté: String,
    VideoSSCaté: String,
    Materiel: String,
    Ingrédient: String,
    Contenu: String
},{collection: "CAT_COLLEC"});

const Cat = mongoose.model('cat',catSchema);


module.exports = Cat;

