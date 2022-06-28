const express = require("express");
const app = express(); 
const path = require("path"); 

const port = 9000 ; 

app.use("/" ,  express.static(path.join(__dirname, "./public")))






app.listen(port , ()=>console.log(`app is listen to port ${port}`))