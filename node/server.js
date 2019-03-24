//back end
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db');

const feedbackModel = require('./feedback_schema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next(); 
})

app.get('/', function(req,res){
    res.end("Root path")
})

app.get('/home', function(req,res){
    res.end("Home path")
})

app.post('/api', function(req,res){
    const feedback = req.body.feedback ;
    const username = req.body.username ;

    feedbackModel.create(req.body,(err,doc)=>{

        if(err)res.json({result: "fail",username: username, feedback:feedback})

        res.json({result: "success",username: username, feedback:feedback})
    })

    //res.end("Feed back = " + feedback + "username" + username)
    //res.json({result: "success",username: username, feedback:feedback})
})

app.get('/api', function(req,res){

    feedbackModel.find(req.body,(err,doc)=>{

        if(err)res.json({result: "failed"})

        res.json({result: "success", data: doc})
    })

})

app.listen(3000, ()=>{
    console.log("Server is runing . . .");
})