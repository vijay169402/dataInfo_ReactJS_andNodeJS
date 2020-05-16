var express = require('express')
const cors=require('cors')
var bodyParser=require('body-parser');
var app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

var api = require('./api')
// var api1 = require('./api')
// app.get('/',function(req,res){
//     res.send('Check')
// })
console.log('tghnjmk,')
app.post('/api',api.api)
// app.post('/api1',api1.api)

app.listen(7000)