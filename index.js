const express =  require("express");


const app = express();



app.get("/",(req,res)=>{
    res.send("Hello World from sai");
})

app.get("/goto",(req,res)=>{
    res.redirect("https://hianime.to/naruto-shippuden-355?ref=search");
})



app.listen(80,()=>{
    console.log("server running at port 80")
})