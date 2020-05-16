var express = require('express')
// var bodyParser = require('body-parser')
// require('./db')
// var cors = require('cors')
// var expressRouter = require('express-router')
var app = express()
// app.use(cors)
// app.use(expressRouter)
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// var api = require('./api')
app.get('/',function(req,res){
    res.send('Check')
})
console.log('tghnjmk')
// app.post('/api',api.api)

app.listen(7000)