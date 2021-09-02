require("dotenv").config();
const express=require("express");
const app=express();


const PORT=process.env.PORT || 3000;


const ConnectDB=require("./config/db");
const router = require("./routes/files");
ConnectDB();

app.use('api/files',require("./routes/files"))
app.listen(PORT,()=>{
    console.log(`listening to the port ${PORT}`);
});