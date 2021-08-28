const mongoose = require('mongoose');


mongoose.connect("mongodb://loaclhost:27017/hackoutDemo",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log('connection successful with the database');
}).catch((er)=>{
    console.log("Not connected to database");
    
});
