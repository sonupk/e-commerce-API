const express = require('express')
const router = express.Router()
const productController =require('../controller/productController')
const productCategoryController =require('../controller/productCategory')


router.post('/product',productController.createProduct)

router.post('/ProductCategory',productCategoryController.createProductCategory)
router.get('/GetAllProductCategory',productCategoryController.GetAllProductCategory)
router.put('/UpdateProductCategory/:id',productCategoryController.UpdateProductCategory)





module.exports = router