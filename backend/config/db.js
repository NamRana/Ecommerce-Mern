import mongoose from 'mongoose'

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://Abhay:abhay@cluster0.ifw5vyj.mongodb.net/?retryWrites=true&w=majority")
        console.log('DB connected successfully!')
    } catch (error) {
        console.log(error)
        console.error('DB connection failed!')
        process.exit(1)
    }
}

export default dbConnection
