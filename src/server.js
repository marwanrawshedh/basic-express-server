'use strict'

const express=require('express');
const server=express()
const PORT =process.env.PORT||3010;
require('dotenv').config
const notfound=require('./error-handlers/404')
const generalerror=require('./error-handlers/500')
const logger=require('./middleware/logger')
const validator=require('./middleware/validator')

server.use(logger)
server.get("/", home);
function home(req, res) {
    res.status(200).send("welcome");
}


server.get('/person',validator,(req,res)=>{
    
    const info=req.info
    res.status(info.status).send(info.name)
})


server.get('/error',(req,res,next)=>{
    // next("Server Error")
    throw new Error('"Server Error"')
})


server.use(generalerror)
server.use("*",notfound)
function start(){
server.listen(PORT,()=>{console.log(`welcome on ${PORT}`)})}

module.exports={server,start}