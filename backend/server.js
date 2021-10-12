const express = require('express')
const dotenv = require('dotenv')
const productsContent = require('./data/ProductsContent')

dotenv.config()

const app = express()

app.get("/", (req, res) => {
    res.send('API is running...')
})

app.get("/api/products", (req, res) => {
    res.json(productsContent)
})

app.get("/api/products/:id", (req, res) => {
    const singleProduct = productsContent.find((product) => product.id == req.params.id)
    res.json(singleProduct)
})

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server running ${process.env.NODE_ENV} mode port ${PORT}`))
