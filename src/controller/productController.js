const mysql= require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "ecommerce"
  }).promise()
  
  
  // CREATE PRODUCT
  const createProduct=async function (req,res) {
    const {
           name, price, vendor_id, category_id, variations, attributes} = req.body;
    try {
      const product = await db.query(`INSERT INTO Product (name, price, vendor_id, category_id, variations, attributes) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, price, vendor_id, category_id, variations, attributes]);
      return product;
    } catch (err) {
      res.status(500).json({
        status: 'error',
        data: err.message
      });
    }
  }
  
//Get all product
const GetAllProduct=async function(req,res){
 try {
    const [p]= await db.query("SELECT*FROM Product");
    res.status(200).json({
      status: 'success',
      data: p
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  }
};

// Update Product
const updateProduct=async function (req,res){
  const {id, name, price, vendor_id, category_id, variations, attributes}=req.body
  try {
    const product = await db.query('UPDATE Product SET name = ?, price = ?, vendor_id = ?, category_id = ?, variations = ?, attributes = ? WHERE id = ?',
      [name, price, vendor_id, category_id, variations, attributes, id]);
    return product;
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  }
}

module.exports.createProduct=createProduct
module.exports.GetAllProduct=GetAllProduct
module.exports.updateProduct=updateProduct