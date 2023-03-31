const connectDB=require('./db/connect');
require('dotenv').config();
const express=require('express');
const router=require("./routes/route");
const notFound=require('./middlewares/notFound')
const errorHandlerMiddleware=require('./middlewares/errorHandler');
const app=express();
app.use(express.json());
app.use('/api/v1/tasks',router);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port=process.env.PORT || 3000;

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port,()=> console.log(`Server started on port ${port}`));
        
    } catch (error) {
        console.log(error);
    }
}

start();
