const express = require('express')
const productsContent = require('./data/ProductsContent')

const app = express()

app.get("/", (req, res) => {
    res.send('API is running')
})

app.get("/api/products", (req, res) => {
    res.json(productsContent)
})

app.get("/api/products/:id", (req, res) => {
    const singleProduct = productsContent.find((product) => product.id == req.params.id)
    res.json(singleProduct)
})

app.listen(5000, console.log('port 5000'))
