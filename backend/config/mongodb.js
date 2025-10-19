import mongoose from 'mongoose'

export const mongoDB = async () => {
    const URI = process.env.MONGODB_URI;

    try {
        const conn = await mongoose.connect(URI)
        console.log("Successfully connected to DB:", conn.connection.host)
    } catch (error) {
        console.log("Error in connecting to DB")
        process.exit(1)
    }
}