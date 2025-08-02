import mongoose from 'mongoose';

console.log('Testing MongoDB connection...');

// Use a direct connection string for testing
const MONGODB_URI = 'mongodb://localhost:27017/lms_db';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // Close the connection after testing
    await mongoose.connection.close();
    console.log('🛑 Connection closed');
    console.log('✅ MongoDB connection test successful!');
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
