const router=require('express').Router()

router.route('/').get((req,res)=>{
    res.send('welcome in my api')
})

module.exports=router