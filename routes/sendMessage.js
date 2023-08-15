import express from "express"
import bodyParser from "body-parser"
import SendMessage from "../controllers/sendmessage.js"
const router=express.Router()
router.use(bodyParser.json())

router.post("/contact",SendMessage)

export default router