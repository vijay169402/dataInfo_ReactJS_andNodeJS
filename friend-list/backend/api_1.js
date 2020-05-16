var express = require('express')
var bodyParser=require('body-parser');

var connection = require('./db');
module.exports.api = (req,res)=>{
    console.log('GYJHNBM',req.body)
    res.send('BILLI')

}
