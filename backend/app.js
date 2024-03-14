const express =require("express")
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const app=express()
app.use(express.json());


app.use("/users",router);
app.post("/")
mongoose.connect(""
).then(()=>app.listen(5000,()=>console.log("connected"))).catch((err)=>console.log(err));