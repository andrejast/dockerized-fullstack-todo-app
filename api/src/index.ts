import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import todosRoutes from './routes/routes.todos';

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/todos', todosRoutes);
app.get('/', (_req, res) => {
	res.send('Welcome to server');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
