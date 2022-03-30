require('dotenv').config()


const conectDB=require('./db/connect')
const {notFound,handlingError}=require('./middlewars/error')
const productRouter=require('./routes/products')

const express=require('express')
const app=express()

//routes
app.use('/api/v1/products',productRouter)

// middleware
app.use(express.json())
app.use(notFound)
app.use(handlingError)


app.get('/',(req,res)=>{
    res.send('welcome in store api')
})

const port=process.env.PORT||4000

const start=async()=>{
    try{
        await conectDB(process.env.MONGO_URL)
        app.listen(port,()=>console.log(`server is listen in post ${port}...`))
    }catch(error){
        console.log(error)
    }
}
start()