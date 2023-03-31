const{CustomError}=require("../errors/custom-errors");

const errorHandlerMiddleware=(error,req,res,next)=>{
    if(error instanceof CustomError){
      res.status(error.statusCode).json({msg:error.message});
}
return res.status(500).json({msg:error});
}

module.exports=errorHandlerMiddleware;
