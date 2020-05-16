var express = require('express')
var bodyParser=require('body-parser');

var connection = require('./db');
module.exports.api = (req,res)=>{
    id = req.body.id
    console.log(req.body.id)
    connection.query('SELECT * FROM person_DATA where name =?',req.body.id,function(err,result){
        if(err){
            console.log('error in query')

        }
        else{
            console.log(result)
            res.send(result)
        }
    })



    // res.send('qwert')

}
