// [10:38 pm, 01/03/2023] Aditya Patil Functionup: Write an e-commerce API with tables: Product, vendor, product category, vendor category, cart, and wishlist.
// You have to create api endpoints for GET, POST, DELETE and PUT functions.

// Details:
// - Product table should contain the following columns:
//   - Name
//   - Price
//   - Vendor (ForeignKey relationship)
//   - creation date
//   - updation date
//   - variations
//   - attributes
//   - category (ForeignKey relationship)

// - Product Category table should contain the following columns:
//   - Name
//   - creation date

// - Vendor table should contain the following columns:
//   - Name
//   - Phone
//   - Address
//   - City
//   - State
//   - Zip
//   - Country
//   - Type ( Individual, Company)
//   - Category (ForeignKey relationship)
//   - GST number (Not required for individual type vendor)

// - Vendor Category table should contain the following columns:
//   - Name
//   - creation date

// - Cart table should contain the following columns:
//   - Product (ForeignKey relationship)
//   - quantity
//   - product variation ( if selected any)
//   - Discount applied
//   - Grand total
//   - Sub-total
//   - Tax Total
//   - creation date
//   - Cart type ( guest or registered user)

// - Wishlist table should contain the following columns:
//   - Product (ForeignKey relationship)
//   - creation date
// write all backend code with nodejs express mysql and also write apis with async await and try catch block

// // Product Table Schema
// CREATE TABLE IF NOT EXISTS `Product` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `name` VARCHAR(255) NOT NULL,
//   `price` DECIMAL(10,2) NOT NULL,
//   `vendor_id` INT NULL DEFAULT NULL,
//   `category_id` INT NULL DEFAULT NULL,
//   `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   `variations` TEXT NULL,
//   `attributes` TEXT NULL,
//   PRIMARY KEY (`id`),
//   INDEX `fk_Product_Vendor1_idx` (`vendor_id` ASC) VISIBLE,
//   INDEX `fk_Product_ProductCategory1_idx` (`category_id` ASC) VISIBLE,
//   CONSTRAINT `fk_Product_Vendor1`
//     FOREIGN KEY (`vendor_id`)
//     REFERENCES `Vendor` (`id`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION,
//   CONSTRAINT `fk_Product_ProductCategory1`
//     FOREIGN KEY (`category_id`)
//     REFERENCES `ProductCategory` (`id`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION);

// // Product Category Table Schema
// CREATE TABLE IF NOT EXISTS `ProductCategory` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `name` VARCHAR(255) NOT NULL,
//   `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`));

// // Vendor Table Schema
// CREATE TABLE IF NOT EXISTS `Vendor` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `name` VARCHAR(255) NOT NULL,
//   `phone` VARCHAR(255) NOT NULL,
//   `address` VARCHAR(255) NOT NULL,
//   `city` VARCHAR(255) NOT NULL,
//   `state` VARCHAR(255) NOT NULL,
//   `zip` VARCHAR(255) NOT NULL,
//   `country` VARCHAR(255) NOT NULL,
//   `type` VARCHAR(255) NOT NULL,
//   `category_id` INT NULL DEFAULT NULL,
//   `gst_number` VARCHAR(255) NULL DEFAULT NULL,
//   `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`),
//   INDEX `fk_Vendor_VendorCategory1_idx` (`category_id` ASC) VISIBLE,
//   CONSTRAINT `fk_Vendor_VendorCategory1`
//     FOREIGN KEY (`category_id`)
//     REFERENCES `VendorCategory` (`id`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION);

// // Vendor Category Table Schema
// CREATE TABLE IF NOT EXISTS `VendorCategory` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `name` VARCHAR(255) NOT NULL,
//   `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`));

// // Cart Table Schema
// CREATE TABLE IF NOT EXISTS `Cart` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `product_id` INT NULL DEFAULT NULL,
//   `quantity` INT NULL DEFAULT NULL,
//   `variation` INT NULL DEFAULT NULL,
//   `discount` DECIMAL(10,2) NULL DEFAULT NULL,
//   `grand_total` DECIMAL(10,2) NULL DEFAULT NULL,
//   `sub_total` DECIMAL(10,2) NULL DEFAULT NULL,
//   `tax_total` DECIMAL(10,2) NULL DEFAULT NULL,
//   `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   `cart_type` VARCHAR(255) NULL DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   INDEX `fk_Cart_Product1_idx` (`product_id` ASC) VISIBLE,
//   CONSTRAINT `fk_Cart_Product1`
//     FOREIGN KEY (`product_id`)
//     REFERENCES `Product` (`id`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION);

// // Wishlist Table Schema
// CREATE TABLE IF NOT EXISTS `Wishlist` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `product_id` INT NULL DEFAULT NULL,
//   `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`),
//   INDEX `fk_Wishlist_Product1_idx` (`product_id` ASC) VISIBLE,
//   CONSTRAINT `fk_Wishlist_Product1`
//     FOREIGN KEY (`product_id`)
//     REFERENCES `Product` (`id`)
//     ON DELETE NO ACTION
//     ON UPDATE NO ACTION);

// create all apis with mysql queries with async await and try catch block

// // Product API
// // Get all products
// router.get('/', async (req, res) => {
//   try {
//     const products = await db.select('*').from('Product');
//     res.status(200).json({
//       status: 'success',
//       data: products
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Get product by id
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await db.select('*').from('Product').where('id', id);
//     res.status(200).json({
//       status: 'success',
//       data: product
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Create product
// router.post('/', async (req, res) => {
//   const { name, price, vendor_id, category_id, variations, attributes } = req.body;
//   try {
//     const product = await db('Product').insert({
//       name,
//       price,
//       vendor_id,
//       category_id,
//       variations,
//       attributes
//     });
//     res.status(201).json({
//       status: 'success',
//       data: product
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Update product
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const {
//     name,
//     price,
//     vendor_id,
//     category_id,
//     variations,
//     attributes
//   } = req.body;
//   try {
//     const product = await db('Product')
//       .update({
//         name,
//         price,
//         vendor_id,
//         category_id,
//         variations,
//         attributes
//       })
//       .where('id', id);
//     res.status(200).json({
//       status: 'success',
//       data: product
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Delete product
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await db('Product').where('id', id).del();
//     res.status(200).json({
//       status: 'success',
//       data: product
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Vendor API
// // Get all vendors
// router.get('/', async (req, res) => {
//   try {
//     const vendors = await db.select('*').from('Vendor');
//     res.status(200).json({
//       status: 'success',
//       data: vendors
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Get vendor by id
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const vendor = await db.select('*').from('Vendor').where('id', id);
//     res.status(200).json({
//       status: 'success',
//       data: vendor
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Create vendor
// router.post('/', async (req, res) => {
//   const {
//     name,
//     phone,
//     address,
//     city,
//     state,
//     zip,
//     country,
//     type,
//     category_id,
//     gst_number
//   } = req.body;
//   try {
//     const vendor = await db('Vendor').insert({
//       name,
//       phone,
//       address,
//       city,
//       state,
//       zip,
//       country,
//       type,
//       category_id,
//       gst_number
//     });
//     res.status(201).json({
//       status: 'success',
//       data: vendor
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Update vendor
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const {
//     name,
//     phone,
//     address,
//     city,
//     state,
//     zip,
//     country,
//     type,
//     category_id,
//     gst_number
//   } = req.body;
//   try {
//     const vendor = await db('Vendor')
//       .update({
//         name,
//         phone,
//         address,
//         city,
//         state,
//         zip,
//         country,
//         type,
//         category_id,
//         gst_number
//       })
//       .where('id', id);
//     res.status(200).json({
//       status: 'success',
//       data: vendor
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Delete vendor
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const vendor = await db('Vendor').where('id', id).del();
//     res.status(200).json({
//       status: 'success',
//       data: vendor
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Product Category API
// // Get all product categories
// router.get('/', async (req, res) => {
//   try {
//     const productCategories = await db.select('*').from('ProductCategory');
//     res.status(200).json({
//       status: 'success',
//       data: productCategories
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Get product category by id
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const productCategory = await db
//       .select('*')
//       .from('ProductCategory')
//       .where('id', id);
//     res.status(200).json({
//       status: 'success',
//       data: productCategory
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Create product category
// router.post('/', async (req, res) => {
//   const { name } = req.body;
//   try {
//     const productCategory = await db('ProductCategory').insert({
//       name
//     });
//     res.status(201).json({
//       status: 'success',
//       data: productCategory
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Update product category
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const productCategory = await db('ProductCategory')
//       .update({
//         name
//       })
//       .where('id', id);
//     res.status(200).json({
//       status: 'success',
//       data: productCategory
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Delete product category
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const productCategory = await db('ProductCategory').where('id', id).del();
//     res.status(200).json({
//       status: 'success',
//       data: productCategory
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Vendor Category API
// // Get all vendor categories
// router.get('/', async (req, res) => {
//   try {
//     const vendorCategories = await db.select('*').from('VendorCategory');
//     res.status(200).json({
//       status: 'success',
//       data: vendorCategories
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'error',
//       data: err
//     });
//   }
// });

// // Get vendor category by id
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
// [10:38 pm, 01/03/2023] Aditya Patil Functionup: hey openAI I have created Product, vendor, product category apisand now you create remaining vendor category, cart, and wishlist apis with mysql queries and using async await try catch block

// // Endpoint for Vendor Category Table
// // Get API for Vendor Category
// app.get("/vendor-category", async (req, res) => {
//   try {
//     const vendorCategory = await pool.query("SELECT * FROM VendorCategory");
//     res.json(vendorCategory);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Post API for Vendor Category
// app.post("/vendor-category", async (req, res) => {
//   try {
//     const { name } = req.body;
//     const newVendorCategory = await pool.query(
//       "INSERT INTO VendorCategory (name) VALUES($1) RETURNING *",
//       [name]
//     );
//     res.json(newVendorCategory);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Put API for Vendor Category
// app.put("/vendor-category/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name } = req.body;
//     const updateVendorCategory = await pool.query(
//       "UPDATE VendorCategory SET name = $1 WHERE id = $2",
//       [name, id]
//     );
//     res.json("Vendor Category was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Delete API for Vendor Category
// app.delete("/vendor-category/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteVendorCategory = await pool.query(
//       "DELETE FROM VendorCategory WHERE id = $1",
//       [id]
//     );
//     res.json("Vendor Category was deleted!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Endpoint for Cart Table
// // Get API for Cart
// app.get("/cart", async (req, res) => {
//   try {
//     const cart = await pool.query("SELECT * FROM Cart");
//     res.json(cart);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Post API for Cart
// app.post("/cart", async (req, res) => {
//   try {
//     const { product_id, quantity, variation, discount, grand_total,
//             sub_total, tax_total, cart_type } = req.body;
//     const newCart = await pool.query(
//       "INSERT INTO Cart (product_id, quantity, variation, discount, grand_total,
//             sub_total, tax_total, cart_type) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
//       [product_id, quantity, variation, discount, grand_total,
//             sub_total, tax_total, cart_type]
//     );
//     res.json(newCart);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Put API for Cart
// app.put("/cart/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { product_id, quantity, variation, discount, grand_total,
//             sub_total, tax_total, cart_type } = req.body;
//     const updateCart = await pool.query(
//       "UPDATE Cart SET product_id = $1, quantity = $2, variation = $3, discount = $4, grand_total = $5,
//             sub_total = $6, tax_total = $7, cart_type = $8 WHERE id = $9",
//       [product_id, quantity, variation, discount, grand_total,
//             sub_total, tax_total, cart_type, id]
//     );
//     res.json("Cart was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Delete API for Cart
// app.delete("/cart/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteCart = await pool.query(
//       "DELETE FROM Cart WHERE id = $1",
//       [id]
//     );
//     res.json("Cart was deleted!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Endpoint for Wishlist Table
// // Get API for Wishlist
// app.get("/wishlist", async (req, res) => {
//   try {
//     const wishlist = await pool.query("SELECT * FROM Wishlist");
//     res.json(wishlist);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Post API for Wishlist
// app.post("/wishlist", async (req, res) => {
//   try {
//     const { product_id } = req.body;
//     const newWishlist = await pool.query(
//       "INSERT INTO Wishlist (product_id) VALUES(…