const { Product } = require('../models/product.model');

//responding with a object that is the message hello world. curly braces = object.
module.exports.index = (req, res) => {
    res.json({
        message: "Hello, world!"
    })
}
//CREATE
module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}
//GET ALL
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}
//GET ONE
module.exports.getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}
//UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}
//DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}