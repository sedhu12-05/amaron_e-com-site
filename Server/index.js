const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://nk:nk@cluster0.bthjy.mongodb.net/e-commerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err)
})
const userSchema = new mongoose.Schema({
    name: String,

    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: String,
    password: String,

})
const UserModel = new mongoose.model("UserModel", userSchema)

app.post("/signup", (req, res) => {
    console.log(req.body)
    const { name, phone, email, password } = req.body;
    UserModel.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "This email id already Register" })
        }
        else {
            const user = new UserModel({
                name,
                phone,
                email,
                password,

            })
            user.save();
            res.send({ message: "Successfull Register" })
        }
    })
})

app.post("/login", (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    UserModel.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password == user.password) {
                res.send(user)
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }

        else {
            res.send("This email id is not register")
        }

    }
    )
})



const cartSchema = new mongoose.Schema({
    email: String,
    img: String,
    desc: String,
    newp: String,

})
const cartModel = new mongoose.model("cartModel", cartSchema)

app.post("/addtocart", (req, res) => {
    console.log(req.body)
    const { email,img,desc,newp } = req.body;
   
            const user = new cartModel({
                email,
                img,
                desc,
                newp,

            })
            user.save();
            res.send({ message: "Successfull Register" })
        
    
})

app.post("/displaycart",(req,res)=>{
    console.log(req.body.email)
    cartModel.find({email: req.body.email },(err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})

const buySchema = new mongoose.Schema({
    email: String,
    productdesc: String,
    num: String,
    amount: String,

})
const buyModel = new mongoose.model("buyModel", buySchema)

app.post("/buyproduct", (req, res) => {
    console.log(req.body)
    const { email,productdesc,num,amount } = req.body;
   
            const user = new buyModel({
                email,
                productdesc,
                num,
                amount,

            })
            user.save();
            res.send({ message: "Successfull Register" })
})

app.get("/admindisplay",(req,res)=>{
    buyModel.find({}.toArray=(err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})



app.listen(8080, () => {
    console.log("Server is runing at port 8080")
})