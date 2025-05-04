const routeHandler=(req,res,next)=>{
    if(Object.keys(req.query).length===0){
        return next()
    }
    return next("route");
}


module.exports=routeHandler;