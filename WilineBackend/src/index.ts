import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import userRoutes from '../src/routes/userRoutes';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
