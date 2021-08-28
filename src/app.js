const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
require("./db/conn");

const static_path = path.join(__dirname,"../public")
const templates_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);


app.get('/',(req,res)=>{
    res.render("index");
    // res.send("Some Error has generated . please try again later");
});
app.get('/about',(req,res)=>{
    res.render("Team_Section");
    // res.send("Some Error has generated . please try again later");
});
app.get('/login',(req,res)=>{
    const logi = res.render("login");
    // if(logi===true){
    //     res.render("FeedBack.hbs");
    // }
    // else{
    //     console.log("Login again");
    // }
    // res.send("Some Error has generated . please try again later");
});

app.post("/FeedBack",(req,res)=>{
    res.render("FeedBack");
});


app.listen(3000,(req,res)=>{
    console.log("Server is running at port 3000");

});
