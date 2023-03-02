//const {db}=require('../index.js')
const mysql=require('mysql2')
const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }).promise()
  
const createProduct=async function(req,res){
    const { name, price, vendor_id, category_id, variations, attributes } = req.body;
  try {
    const product = await db('Product').insert({
      name,
      price,
      vendor_id,
      category_id,
      variations,
      attributes
    });
    
    res.status(201).json({
      status: 'success',data: product
    });
  } catch (err) {
    res.status(500).json({status: 'error',data: err
    });
  }
}
module.exports.createProduct=createProduct