import {connectToDatabase} from "@/lib/database";
import mongoose from 'mongoose';

describe('Database connection', () => {
    it('should connect to the database successfully', async () => {
        const conn = await connectToDatabase();
        expect(conn).toBeDefined();
        expect(mongoose.connection.readyState).toBe(1); // 1, bağlantının başarılı olduğunu gösterir
    });
});