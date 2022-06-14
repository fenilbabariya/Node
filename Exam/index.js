// var express = require('express')
// var mongoose = require('mongoose')
// var bodyparser = require('body-parser')
// var route = require('./route')

// mongoose.connect("mongodb+srv://fenilbabariya:410mongo@cluster0.ttnszx3.mongodb.net/?retryWrites=true&w=majority")

var http = require('http')

http.createServer((req,res)=>{
    if(req.url=='/student')
    {
        res.write('Student')
    }
    else
    {
        res.write('Admin')
    }
    res.end()
}).listen(3000,()=>{
    console.log('Server started')
})

