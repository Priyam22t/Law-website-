import express, { raw } from 'express';
import {execPayment, getList} from './controller/law.controler.js';
import {updateContact} from "./controller/law.controler.js";
import {addSubscription} from "./controller/law.controler.js";
import {addUser} from "./controller/law.controler.js";
import {LoginUser} from "./controller/law.controler.js";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin : '*',
}

app.use(cors(corsOptions));
app.use(express.json());

app.post('/home',async (req,res)=>{
    await getList();
})

app.post('/subscribe',async (req,res)=>{
    const result = await addSubscription(req.body.email);
    if(!result){
        return res.status(200).json("added");
    }
    if(result){
        return res.json("exist");
    }
})

app.post("/signup",async (req,res)=>{
    const result = await addUser(req.body.name,req.body.email,req.body.password);
    if(result){
        return res.json("exist");
    }
    if(!result){
        return res.json("added");
    }
})

app.post("/login",async (req,res)=>{
    const result = await LoginUser(req.body.email,req.body.passwd);
    if(result){
        return res.json("loggedin");
    }
    if(!result){
        return res.json("failed");
    }
})

app.post("/contact",async (req,res)=>{
    const result = await updateContact(req.body.name,req.body.phone,req.body.email,req.body.msg);
    console.log(result);
    if(result){
        return res.json("success");
    }
})

app.post("/payment",async (req,res)=>{
    const name = req.body.username;
    const email = req.body.email;
    const acc_no = req.body.accountNo;
    const phone = req.body.phone;
    const price = req.body.amt;
    const attorney = req.body.attorney;

    const result = await execPayment(name,email,phone,acc_no,attorney,price);

    if(result){
        return res.json("success");
    }
    else{
        return res.json("failed");
    }
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
