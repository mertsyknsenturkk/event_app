import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing');
}

interface Cached {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
}

// TypeScript global interface tanımı
declare global {
    var mongoose: Cached; // Bu şekilde global değişkenleri TypeScript ile tanımlayabilirsiniz
}

let cached: Cached = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async (): Promise<mongoose.Mongoose> => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "event",
            bufferCommands: false,
        }).then((mongoose) => {
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};
//d