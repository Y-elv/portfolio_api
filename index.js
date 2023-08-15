import express from "express";
import cors from "cors";
import Welcome from "./controllers/welcome.js";
const app=express();
app.use(cors())
app.get("/api/v1",Welcome)
const port=5200;
app.listen(port,()=>{
    console.log("your server has been started "+port);
    
})