import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedToPology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDb conncected ${conn.connection.host}`)
        
    } catch (error) {

        console.log(`error: ${error.message}`)
        process.exit(1)

    }
    console.log("from db.js")
}

export default connectDb