//It is the way of datastore in JSON file


//1. Product Table=>
var jsonData=
{
    "name": "Product XYZ",
    "price": "25.99",
    "vendor_id": "1",
    "category_id": "1",
    "variations": "[{\"size\":\"XL\"},{\"color\":\"red\"",
    "attributes": "[{\"material\":\"cotton\"},{\"design\":\"striped\"}]"   
}

var sql = "INSERT INTO Product (name, price, vendor_id, category_id, variations, attributes) VALUES (?,?,?,?,?,?)"; 
var values = [JSON.stringify(jsonData)]; 
 
con.query(sql, values, function (err, result) { 
  if (err) throw err; 
  console.log("JSON data inserted into the MySQL database!"); 
}); 

//2.Cart Table=>
var jsonData
{
    "product_id": 1, 
    "quantity": 2, 
    "variation": 3, 
    "discount": 10.00, 
    "grand_total": 18.00, 
    "sub_total": 16.00, 
    "tax_total": 2.00, 
    "cart_type": "shopping"
}
var sql = "INSERT INTO Cart (product_id, quantity, variation, discount, grand_total, sub_total, tax_total, cart_type) VALUES (?,?,?,?,?,?,?,?)"; 
var values = [JSON.stringify(jsonData)]; 
 
db.query(sql, values, function (err, result) { 
  if (err) throw err; 
  console.log("JSON data inserted into the MySQL database!"); 
}); 

//3. Vendor Table=>
var jsonData
{
    "name": "Test Vendor",
    "phone": "1234567890",
    "address": "Test Address",
    "city": "Test City",
    "state": "Test State",
    "zip": "123456",
    "country": "Test Country",
    "type": "Test Type",
    "category_id": 1,
    "gst_number": "Test GST Number"
  }
  var sql = "INSERT INTO Vendor (name, phone, address, city, state, zip, country, type, category_id, gst_number) VALUES (?,?,?,?,?,?,?,?,?,?)"; 
var values = [JSON.stringify(jsonData)]; 
 
db.query(sql, values, function (err, result) { 
  if (err) throw err; 
  console.log("JSON data inserted into the MySQL database!"); 
}); 


  

