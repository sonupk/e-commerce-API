const mysql= require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "ecommerce"
  }).promise()

// CREATE CART
 const createCart= async function (req,res){
    const{product_id, quantity, variation, discount, grand_total, sub_total, tax_total, cart_type}=req.body 
    try {
      const cart = await db.query('INSERT INTO Cart (product_id, quantity, variation, discount, grand_total, sub_total, tax_total, cart_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [product_id, quantity, variation, discount, grand_total, sub_total, tax_total, cart_type]);
      return cart;
    } catch (err) {
        res.status(500).json({
          status: 'error',
          data: err.message
        });
      }
  }


  // Update Cart
  const updateCart=async function(req,res){
     const{id, product_id, quantity, variation, discount, grand_total, sub_total, tax_total, cart_type}=req.body 
    try {
      const cart = await db.query('UPDATE Cart SET product_id = ?, quantity = ?, variation = ?, discount = ?, grand_total = ?, sub_total = ?, tax_total = ?, cart_type = ? WHERE id = ?',
        [product_id, quantity, variation, discount, grand_total, sub_total, tax_total, cart_type, id]);
      return cart;
    } catch (err) {
        res.status(500).json({
          status: 'error',
          data: err.message
        });
      }
  }
  
  // Delete Cart
  const deleteCart=async function (req,res){
    const{id}=req.body
    try {
      const cart = await db.query('DELETE FROM Cart WHERE id = ?', [id]);
      return cart;
    } catch (err) {
        res.status(500).json({
          status: 'error',
          data: err.message
        });
      }
  }

  module.exports.createCart=createCart
  module.exports.updateCart=updateCart
  module.exports.deleteCart=deleteCart