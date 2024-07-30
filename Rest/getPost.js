const express= require('express')
const app= express()
app.use(express.urlencoded({extended:true}))

app.get('/tacos',(req,res)=>{
    res.send('This is a get request');
    })
    
app.post('/tacos',(req,res)=>{
    
    const {Meat ,Quantity}= req.body
    res.send(`Okay here are your ${Quantity}${Meat} tacos`);
    })      

app.listen(3000,()=>{
    console.log('listening on port 3000')
})   
