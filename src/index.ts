import express, { Request, Response } from "express";
import routes from "./routes";
import { AppDataSource } from "./data-source"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req:Request, res:Response, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
app.use("/api/",routes)

AppDataSource.initialize().then(async () => {
    console.log("Connect the database...")

    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
      });
}).catch(error => console.log(error))


