import express from 'express'
import dotenv from 'dotenv'
import productsContent from './data/ProductsContent.js'
import datatabledata from './data/datatabledata.js'
import connectDb from './config/db.js'
import colors from 'colors'

dotenv.config()

connectDb

const app = express()

app.get("/", (req, res) => {
    res.send('API is running...')
})

app.get("/api/products", (req, res) => {
    res.json(productsContent)
})

// data for datatable
app.get("/api/datatabledata", (req, res) => {
    res.json(datatabledata)
})

app.get("/api/products/:id", (req, res) => {
    const singleProduct = productsContent.find((product) => product.id == req.params.id)
    res.json(singleProduct)
})

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server running ${process.env.NODE_ENV} mode port is ${PORT}`))
