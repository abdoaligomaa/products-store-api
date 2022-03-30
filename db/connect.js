const mongoose=require('mongoose')

const conectDB=async(url)=>{
    await mongoose.connect(url)
    console.log('db is connect')

}

module.exports=conectDB
