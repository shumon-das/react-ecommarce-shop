import multer from 'multer'
import path from 'path'

function FileUpload(app){
    const UPLOAD_FOLDER = "./uploadedFile/";

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, UPLOAD_FOLDER)
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname)
            const fileName = file.originalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split(" ")
                            .join("-")+ "-" + Date.now()
            cb(null, fileName + fileExt)                 
        }
    })

    var upload = multer({
        storage: storage,
        limits: {
            fileSize: 50000000  // 1mb
        },
        fileFilter: (req, file, cb) => {
            
            if(file.fieldname === 'singleFile' && file !== undefined){
                // in this case no restriction  
                cb(null, true)
            }else if(file.fieldname === 'documents' && file !== 'undefined'){
                if(file.mimetype === 'application/pdf' || file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
                    cb(null, true)
                }else{
                    cb(new Error("Only pdf and xlsx file allowed and the file must less then 1 mb"))
                }
            }else if(file.fieldname === 'multipleFile' && file !== 'undefined'){
                if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
                    cb(null, true)
                }else{
                    cb(new Error("Only jpg and png file allowed and the file must less then 1 mb"))
                }
            }else{
                console.log("nothing here")
                cb(new Error("Please select a file"))
            }

        }
    })

    // upload single
    app.post("/api/image", upload.single("singleFile"), (req, res) => {
        // console.log(req.file)
        res.send({message: "File Uploaded"}) 
    })

    // upload multiple
    app.post("/api/multiple/image", upload.array("multipleFile", 3), (req, res) => {
        console.log(req.files)
        res.send({message: "File Uploaded"}) 
    })

    // upload multiple docs
    const cpUpload = upload.fields([
        {name: "documents", maxCount: 3}
    ])

    app.post("/api/multiple/docs", cpUpload, (req, res) => {
        console.log(req.files)
        res.send({message: "File Uploaded"}) 
    })


// general error handling
    app.use((err, req, res, next) => {
        if(err){
            if(err instanceof multer.MulterError){
                console.log(err.message)
                res.status(500).send({message: err.message})
            }else{
                console.log(err.message)
                res.status(500).send(err.message)
            }    
        }else{
            res.send("operation successfull")
        }
    })
}

export default FileUpload