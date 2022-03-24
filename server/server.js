import dotenv from 'dotenv'
import express from 'express'
// import bodyParser from 'body-parser'
import connectDb from './config/db.js'
import datatabledata from './data/datatabledata.js'
import productsContent from './data/ProductsContent.js'
import cors from "cors";
import url from 'url'
import data from './data/data.js'
import FileUpload from './FileUpload/Upload.js'
import Export from './ExportCenter/Export.js'


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


dotenv.config()

connectDb

const app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cors(corsOptions)) 

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

/*********************start crud operation****************************/

// post
app.post("/api/create", (req, res) => {

    if(req){
        console.log(req.body)
    }else{
        console.log("nothing like file or etc")
    }
})

// getAll
app.get("/api/getusers", (req, res) => {
    res.send(data)
})


// getById
app.delete("/api/deleteuser/:id", (req, res) => {
    if(req){
        res.send(req.params.id)
        console.log(req.params.id)
    }else{
        console.log("Error")
    }
    
})

/**********************end crud operation********************************/


/*********************start file uploading *******************************/

FileUpload(app)

/*********************end file uploading*******************************/


/*******************export center*******************/

Export(app)

/*******************end export center***************/



app.get("/api/products/:id", (req, res) => {
    const singleProduct = productsContent.find((product) => product.id == req.params.id)
    res.json(singleProduct)
})
 
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running ${process.env.NODE_ENV} mode port is ${PORT}`))
