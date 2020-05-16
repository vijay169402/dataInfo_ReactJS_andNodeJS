var express = require('express')
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "akcspg36883",
    database:'mydb'
  });
  connection.connect(function(err){
      if (err){
          console.log('Error in Connection')
      }
    
      const sql ='insert into person_DATA (name,details) VALUES ('Vijay','coder')'
      connection.query(sql,function(err,result){
          if(err){
              console.log('Error is there')
          }
          console.log('DATA INSERTED')
      })
      
          console.log('Database is Connected')
      
  })
  module.exports = connection