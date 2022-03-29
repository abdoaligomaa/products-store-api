

const getAllProducts=(req,res)=>{
    res.json({products:'products'})
}
const getAllProductsStatic=(req,res)=>{
    res.json({products:'static products'})
}
module.exports={
    getAllProducts,
    getAllProductsStatic
}