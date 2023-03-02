const mysql= require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "ecommerce"
  }).promise()
  const createWishlist =async function(req,res){

    const {product_id } = req.body;
      try {
        const newWishlist = await db.query(
          `INSERT INTO Wishlist (product_id) VALUES(?) `,
          [product_id]
        );
    
          
    
    res.status(201).json({
          status: 'success',
          data: newWishlist
        });
      } catch (err) {
        res.status(400).json({
          status: 'error',
          data: err.message
        });
      }
    }
    module.exports.createWishlist=createWishlist