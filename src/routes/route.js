const express = require('express')//import express framework
const router = express.Router()
const productController =require('../controller/productController')
const productCategoryController =require('../controller/productCategory')
const vendorCategoryController =require('../controller/vendorCategory')
const vendorController =require('../controller/vendorController')
const wishlistController =require('../controller/wishlistController')
const cartController=require('../controller/cartController')


//..........................PRODUCT API'S.....................................................
router.post('/product',productController.createProduct)
router.get('/GetAllProduct',productController.GetAllProduct)
router.put('/UpdateProduct/:id',productController.updateProduct)

//............................PRODUCT CATEGORY API'S...............................................
router.post('/ProductCategory',productCategoryController.createProductCategory)
router.get('/GetAllProductCategory',productCategoryController.GetAllProductCategory)
router.put('/UpdateProductCategory/:id',productCategoryController.UpdateProductCategory)

//...................................VENDOR CATEGORY API'S.........................................
router.post('/vendorCategory',vendorCategoryController.createVendorCategory)
router.get('/GetAllVendorCategory',vendorCategoryController.GetAllVendorCategory)
router.put('/UpdateVendorCategory/:id',vendorCategoryController.UpdateVendorCategory)

//........................VENDOR API'S............................................................
router.post('/vendor',vendorController.createVendor)
router.get('/GetAllVendor',vendorController.GetAllVendor)
router.put('/updateVendor/:id',vendorController.updateVendor)

//..............................WISHLIST API'S.......................................................
router.post('/wishlist',wishlistController.createWishlist)
router.get('/GetAllWishlist',wishlistController.GetAllWishlist)

//..........................CART API'S......................................................
router.post('/cart',cartController.createCart)
router.get('/updateCart',cartController.updateCart)
router.delete('/deleteCart',cartController.deleteCart)

module.exports = router