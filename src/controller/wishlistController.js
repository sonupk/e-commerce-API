const mysql= require('mysql2')
const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()


  //Create wishlist
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
        res.status(500).json({
          status: 'error',
          data: err.message
        });
      }
    }

    // Get all wishlist 
const GetAllWishlist=async function(req,res){
try {
      const [wishlist]= await db.query("SELECT*FROM Wishlist");
      res.status(200).json({
        status: 'success',
        data: wishlist
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        data: err.message
      });
    }
  };

  
    module.exports.createWishlist=createWishlist
    module.exports.GetAllWishlist=GetAllWishlist
    