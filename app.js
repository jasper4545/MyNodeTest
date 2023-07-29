const express = require("express")
const app = express()
const PORT = process.env.PORT || 4545;

app.get("/", (req,res)=>{
  res.send("hellow")
})
app.listen(PORT, ()=> console.log("Server started"))