
const mysql= require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "ecommerce"
  }).promise()
  
// Product Category API
const createProductCategory=async function(req,res){

const { name } = req.body;
  try {
    const pc= await db.query(`INSERT INTO ProductCategory (name)
  VALUES (?)
  `, [name])
res.status(201).json({
      status: 'success',
      data: pc
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err.message
    });
  }
}

// Get all product categories
const GetAllProductCategory=async function(req,res){

  try {
    
    const [pc]= await db.query("SELECT*FROM ProductCategory");
    res.status(200).json({
      status: 'success',
      data: pc
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err.message
    });
  }
};

//update product category
const UpdateProductCategory=async function(req,res){

const id  = req.params;
  const  name  = req.body;
  try {
    const updateproductCategory = await db.query("UPDATE ProductCategory SET name=? WHERE id=?",[name,id]);
    res.status(200).json({
      status: 'success',
      message:` successfully updated`
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err.message
    });
  }
}




module.exports.createProductCategory=createProductCategory
module.exports.GetAllProductCategory=GetAllProductCategory
module.exports.UpdateProductCategory=UpdateProductCategory
