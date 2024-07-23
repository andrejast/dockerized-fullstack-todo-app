import mongoose from 'mongoose';

const connectDB = async () => {
	// mongodb://mongo:27017/todos
	const connection = await mongoose.connect('mongodb://mongo:27017/todos');

	console.log(`MongoDB Connected: ${connection.connection.host}`);
};

export default connectDB;
