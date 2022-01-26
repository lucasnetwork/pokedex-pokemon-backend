import express, { Express } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import routes from "./routes";

config();
class App {
  app: Express;

  constructor() {
    connect(process.env.MONGO_DB as string).then(() => console.log("funcionou"));

    this.app = express();
    this.app.use(cors({
      origin:'https://gifted-johnson-96d68f.netlify.app', 
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200
  }));
    this.app.use(express.json());
    this.app.use(routes);
  }
}

export default new App().app;
