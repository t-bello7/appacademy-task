import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
// connectDB();

const corsOptions = {
	origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
	res.json({ message: "Welcome to todo application."});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


