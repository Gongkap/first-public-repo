const express =require('express');
const path =require('path');
const ejsMate =require('ejs-mate');
const mongoose =require('mongoose');
const session =require('express-session');
const passport =require('passport');
const locatStartegy =require('passport-local');
const flash =require('connect-flash');
const methodOverride =require('method-override');





main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://120.0.0.1:27017/gongkapdb');
    console.log('connection successfull happened guys happens everywhere');
}
const app =express();


// app.engine('ejs','ejsMate');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})