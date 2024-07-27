// src/routes/productRoutes.js
const router = require('express').Router()
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} =require("../controllers/productController.js");

router.post('/create', createProduct);
router.get('/getAll', getProducts);
router.get('/getById/:id', getProductById);
router.put('/updateById/:id', updateProduct);
router.delete('/deleteById/:id', deleteProduct);

module.exports = router
