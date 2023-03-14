const mysql= require('mysql2')
const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

  
// Create Vendor Category 
const createVendorCategory=async function(req,res){
const { name } = req.body;
  try {
    const newVendorCategory = await db.query(
      `INSERT INTO VendorCategory (name) VALUES(?) `,
      [name]
    );
res.status(201).json({
      status: 'success',
      data: newVendorCategory
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  }
}

// Get all vendor categories
const GetAllVendorCategory=async function(req,res){
try {
    const [vc]= await db.query("SELECT*FROM VendorCategory");
    res.status(200).json({
      status: 'success',
      data: vc
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  }
};

//update vendor category
const UpdateVendorCategory=async function(req,res){
const id  = req.params;
  const  name  = req.body;
  try {
    const updatevendorCategory = await db.query("UPDATE VendorCategory SET name=? WHERE id=?",[name,id]);
    res.status(200).json({
      status: 'success',
      message:`successfully updated`
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  }
}

module.exports.createVendorCategory=createVendorCategory
module.exports.GetAllVendorCategory=GetAllVendorCategory
module.exports.UpdateVendorCategory=UpdateVendorCategory