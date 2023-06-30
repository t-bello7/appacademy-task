import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import 'dotenv/config';
import cors from "cors";
import { connectDB } from "./config/db.config";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";
import dbInit from "./models/init";

const app: Express = express();
connectDB();
dbInit();

const corsOptions = {
	origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "Welcome to todo application."});
});

app.use('/api/auth',authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


