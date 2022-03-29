const handlingError=(err,req,res,next)=>{
    // res.json({err})
    res.send('this page use to handling express Errors')


}

const notFound=(req,res,next)=>{
    res.send('this page not found .try an other url')

}
module.exports={
    handlingError,
    notFound
}