const express =require('express');
var cors = require('cors')
const app=express();
const port =process.env.PORT || 5000;

app.use(cors())

const catagory= require('./Data/Catagories/CataGories.json')
const news= require('./Data/news.json');


app.get('/',(req,res)=>{
    res.send("News api running!")
});

app.get('/catagories',(req,res)=>{
    res.send(catagory)
})

app.get('/news',(req,res)=>{
    res.send(news)
})



app.get('/catagories/:id',(req,res)=>{

    const id= req.params.id;

    if(id==8){
        res.send(news);
    }else{
    const selectedCatagory= news.filter(n=> n.category_id=== id);
    res.send(selectedCatagory);
    }

})


app.get('/news/:id',(req,res)=>{

    const id=req.params.id;
    const selectedNews=news.find(n=> n._id==id);
    res.send(selectedNews);
    console.log(req.params.id)
})


app.listen(port ,()=>{
    console.log("Dragon news server running!",port)
})