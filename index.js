import express from "express";
import cors from "cors";
import Welcome from "./controllers/welcome.js";
import sendMessage from "./routes/sendMessage.js"
import swaggerDocs from "./api-docs/swagger.js";


const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));

app.get("/", Welcome)

app.use("/api/v1", sendMessage)

const port = 5200;
app.listen(port, () => {
    console.log("your server has been started " + port);

})

swaggerDocs(app);