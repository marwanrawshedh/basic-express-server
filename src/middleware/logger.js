'use strict'
module.exports=(req,res,next)=>{
    // console.log(req)
console.log(req.path,req.method)
next()

}