// import { MongoClient } from "mongodb"
// import mongoose from "mongoose"

// const MONGODB_DB = "nextjs-db"
// const MONGODB_URI =
//   "mongodb+srv://zeeshan1361:zeeshan@cluster0.v4vh1hz.mongodb.net/test"
// // check the MongoDB URI
// if (!MONGODB_URI) {
//   throw new Error("Define the MONGODB_URI environmental variable")
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//   throw new Error("Define the MONGODB_DB environmental variable")
// }

// let cachedClient = null
// let cachedDb = null

// export async function connectToDatabase() {
//   // check the cached.
//   if (cachedClient && cachedDb) {
//     // load from cache
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     }
//   }

//   // set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }

//   // Connect to cluster
//   let client = new MongoClient(MONGODB_URI, opts)
//   await client.connect()
//   let db = client.db(MONGODB_DB)

//   // set cache
//   cachedClient = client
//   cachedDb = db

//   return {
//     client: cachedClient,
//     db: cachedDb,
//   }
// }

// import mongoose from "mongoose"

// const MONGODB_URI =
//   "mongodb+srv://zeeshan1361:zeeshan@cluster0.v4vh1hz.mongodb.net/test"

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   )
// }

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//   if (cached?.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose
//     })
//   }

//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.conn
// }

// export default dbConnect

import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("MongoDB connected")
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`)
  }
}

export default connectDB
