const Product = require("../models/product")


const getAllProducts=async(req,res)=>{
    // console.log(req.query)
    const queryObject={}
    const{featured,company,name,sort,field}=req.query

    if(featured){
        queryObject.featured=featured==='true'?true:false
    }

    if(company){
        queryObject.company=company
    }
    if(name){
        queryObject.name={$regex:`^${name}`,$options:'i'}
    }
    if(sort){
        const sortList=sort.split(',').join(' ')
        queryObject.sort=sortList

    }

    if(field){
        const fieldList=field.split(',').join(' ')
        queryObject.field=fieldList

    } else{
        queryObject.sort='createAt'

    }
    const page= Number(req.query.page)||1 
    const limit= Number(req.query.limit)||10
    const skip=(page-1)*limit 


    let products=await Product.find(queryObject).sort(queryObject.sort).select(queryObject.field).skip(skip).limit(limit)
  
    res.json({ ProductsNumber:products.length,products})
}
const getAllProductsStatic=(req,res)=>{
    res.json({products:'static products'})
}
module.exports={
    getAllProducts,
    getAllProductsStatic
}