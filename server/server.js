const app = require('./app');
const connectDb = require('./configs/db')
require('dotenv').config();
app.listen(process.env.PORT||4000,async()=>{
    try{
       await connectDb();
       console.log("server listening on port 4000");
    }
    catch(e){
        console.log(e);
    }
});