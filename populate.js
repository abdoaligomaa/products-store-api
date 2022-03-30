// this file is for adding products to my data base 
require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./product.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_UR)
    await Product.deleteMany()
    await Product.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log('rerrr')
    process.exit(1)
  }
}

start()
