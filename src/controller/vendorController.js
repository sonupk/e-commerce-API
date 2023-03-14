const mysql= require('mysql2')
const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

  
//  Create Vendor 
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
        res.status(500).json({
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

// Update vendor
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
