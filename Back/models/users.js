const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const Schema = mongoose.Schema;
const catSchema= require('./category').schema;
const UserSchema = new Schema({
  nom: String,
  prenom: String,
  email: String,
  Password:String,
  photoUser: String,
  Category:[catSchema]
},{collection: "USER_COLLEC"});
UserSchema.pre('save',async function(next){
try{
  const Salt=await bcrypt.genSalt(10);
  const Hash=await bcrypt.hash(this.Password,Salt);
  this.Password=Hash;
  next();
}catch(error){
  next(error);
};
})


const User = mongoose.model('user',UserSchema);


module.exports = User;
