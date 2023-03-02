const express = require('express')
const router = express.Router()
const productController =require('../controller/productController')
const productCategoryController =require('../controller/productCategory')
const vendorCategoryController =require('../controller/vendorCategory')
const vendorController =require('../controller/vendorController')
const wishlistController =require('../controller/wishlistController')



router.post('/product',productController.createProduct)
router.get('/GetAllProduct',productController.GetAllProduct)
router.put('/UpdateProduct/:id',productController.updateProduct)



router.post('/ProductCategory',productCategoryController.createProductCategory)
router.get('/GetAllProductCategory',productCategoryController.GetAllProductCategory)
router.put('/UpdateProductCategory/:id',productCategoryController.UpdateProductCategory)

router.post('/vendorCategory',vendorCategoryController.createVendorCategory)
router.get('/GetAllVendorCategory',vendorCategoryController.GetAllVendorCategory)
router.put('/UpdateVendorCategory/:id',vendorCategoryController.UpdateVendorCategory)

router.post('/vendor',vendorController.createVendor)
router.get('/GetAllVendor',vendorController.GetAllVendor)
router.put('/updateVendor/:id',vendorController.updateVendor)

router.post('/wishlist',wishlistController.createWishlist)















module.exports = router