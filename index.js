import express from "express";
import product from "./product.js";
const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json(product);
});

app.listen(3000,()=>{
    console.log("Connected to port 3000");
})