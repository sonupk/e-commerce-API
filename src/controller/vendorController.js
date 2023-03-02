const mysql= require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database: "ecommerce"
  }).promise()
  
// Vendor API
const createVendor=async function(req,res){
const {
        name,phone,address,city, state,zip, country,type,category_id,gst_number} = req.body;
      try {
        let queryString = 'INSERT INTO Vendor (name, phone, address, city, state, zip, country, type, category_id, gst_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        let queryValues = [name, phone, address, city, state, zip, country, type, category_id, gst_number];
        const vendor = await db.query(queryString, queryValues);
        res.status(201).json({
          status: 'success',
          data: vendor
        });
      } catch (err) {
        res.status(400).json({
          status: 'error',
          data: err
        });
      }
    };
    //Get all vendor 
const GetAllVendor=async function(req,res){

  try {
    
    const [v]= await db.query("SELECT*FROM Vendor");
    res.status(200).json({
      status: 'success',
      data: v
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  }
};

const updateVendor=async function updateVendor(id, name, phone, address, city, state, zip, country, type, category_id, gst_number) {
  try {
    const vendor = await db.query('UPDATE Vendor SET name = ?, phone = ?, address = ?, city = ?, state = ?, zip = ?, country = ?, type = ?, category_id = ?, gst_number = ? WHERE id = ?',
      [name, phone, address, city, state, zip, country, type, category_id, gst_number, id]);
    return vendor;
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: err.message
    });
  }
}



  
    
module.exports.createVendor=createVendor
module.exports.GetAllVendor=GetAllVendor
module.exports.updateVendor=updateVendor
