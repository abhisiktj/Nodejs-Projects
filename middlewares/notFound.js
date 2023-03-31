const notFound=(req,res)=>{
    res.status(400).send("Not Found");
}

module.exports=notFound;