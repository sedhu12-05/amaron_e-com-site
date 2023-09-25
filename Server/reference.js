
// const express = require("express")
// const app = express();
// app.use(express.json())
// app.use(express.urlencoded({extended : false}))
// const cors = require("cors")
// app.use(cors())
// const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/ecommerce",{
//     useNewUrlParser: true,
//     useUnifiedTopology : true,
// }).then(()=>{
//     console.log("Connection Successfull")
// }).catch((err)=>{
//     console.log(err)
// })
// const userSchema = new mongoose.Schema({
//     firstName : String,
//     rollno : String,
//     email : {
//         type: String,
//         required :true,
//         unique : true,
//     },
//     password : String,
//     repassword : String   
// })
// const UserModel = new mongoose.model("UserModel",userSchema)

// const wifiSchema = new mongoose.Schema({
//     name : String,
//     rollno : String,
//     email : {
//         type: String,
//         required :true,
//         unique : true,
//     },
//     department : String,
//     yearofstudy : String,
//     os: String,
//     macaddress: String,
//     antivirus: String,
//     flag: Number,
//     username: String,
//     password: String
// })
// const wifiModel = new mongoose.model("wifiModel",wifiSchema)

// app.post("/wifiregister",(req,res)=>{
//     console.log(req.body)
//     const flag = 0;
//     const username = '';
//     const password = '';
//     const {name,rollno,email,department,yearofstudy,os,macaddress,antivirus} = req.body;
//     wifiModel.findOne({email: email},(err,wifiregister)=>{
//             if(wifiregister){
//                 res.send({message : "This email id already Register"})
//             }
//             else{
//                 const wifiregister = new wifiModel({
//                     name,
//                     rollno, 
//                     email, 
//                     department,
//                     yearofstudy,
//                     os,
//                     macaddress,
//                     antivirus,
//                     flag,
//                     username,
//                     password
//                 })
//                 wifiregister.save();
//                 res.send({message : "Successfull Register"})
                
//             }
//     })
// })

// app.post("/register",(req,res)=>{
//     console.log(req.body)
//     const {name,rollno,email,password} = req.body;
//     UserModel.findOne({email: email},(err,user)=>{
//             if(user){
//                 res.send({message : "This email id already Register"})
//             }
//             else{
//                 const user = new UserModel({
//                     name,
//                     rollno, 
//                     email, 
//                     password,
                    
//                 })
//                 user.save();
//                 res.send({message : "Successfull Register"})
//             }
//     })
// })

// app.get("/display",(req,res)=>{
//     wifiModel.find({}.toArray=(err, result)=>{
//         if (err) throw err;
//         console.log(result);
//         res.send(result);
//     })
// })

// app.get("/displayfinal",(req,res)=>{
//     console.log(req.body.id)
//     wifiModel.findOne({rollno: req.body.id },(err, result)=>{
//         if (err) throw err;
//         console.log(result);
//         res.send(result);
//     })
// })

// app.post("/updateflag",(req,res)=>{
//     var myquery = { _id: req.body.id };
//     console.log(myquery)
//     var newvalues = { $set: {username: req.body.username, password: req.body.password,flag:1 } };
//     wifiModel.updateOne(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//     });
// })

// app.post("/login",(req,res)=>{
//     console.log(req.body)
//     const {email,password} = req.body 
//     UserModel.findOne({email : email},(err,user)=>{
//             if(user){
//                 if(password == user.password){
//                     res.send(user)
//                 }
//                 else{
//                     res.send({message : "Password didn't match"})
//                 }
//             }
            
//             else{
//                 res.send( "This email id is not register")
//             } 
//             if(user.email="midhunaa.20it@kongu.edu"){
//                 res.send({message:"admin"})
             
//             }    
//     }
//     )
// }) 
// app.listen(8080,()=>{
//     console.log("Server is runing at port 8080")
// })