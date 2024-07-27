// src/controllers/productController.js
const Product = require('../models/productModel.js')

// Create (POST)
exports.createProduct = async (req, res) => {
    try {
        

        // logc here 



    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};

// Read/View (GET)
exports.getProducts = async (req, res) => {
    try {
       

        //  logic to find

    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Get by ID (GET)
exports.getProductById = async (req, res) => {
    try {
       
        // logic here


    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// Update (PUT)
exports.updateProduct = async (req, res) => {
    try {
       
        //  logic here

    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error });
    }
};

// Delete (DELETE)
exports.deleteProduct = async (req, res) => {
    try {
       
        // logic here 


    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};
