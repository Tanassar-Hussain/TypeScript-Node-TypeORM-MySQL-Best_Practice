import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";



const app: Express = express();


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World!'
    });
});

export default app;