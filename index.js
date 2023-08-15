import express from "express";
import cors from "cors";
import Welcome from "./controllers/welcome.js";
import sendMessage from "./routes/sendMessage.js"
const app=express();
app.use(cors())

app.get("/api/v1",Welcome)

app.use("/api/v1",sendMessage)
const port=5200;
app.listen(port,()=>{
    console.log("your server has been started "+port);
    
})