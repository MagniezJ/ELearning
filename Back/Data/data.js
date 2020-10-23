const mongoose=require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://justine:diego.155@elearning.dwya2.mongodb.net/Elearning?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
.once('open',() => console.log("Connexion à MongoDB établie !"))
.on('error',(error) => {
    console.warn('Warning',error);
});

