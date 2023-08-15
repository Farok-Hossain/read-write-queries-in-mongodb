import express, { Application } from "express";
import cors from "cors";
import router from "./app/modules/user/user.route";

const app: Application = express();

app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", router);
app.use("/api/v1/user", router);

export default app;

// Pattern Modular
/*
Interface -> interface.ts
Schema, Model -> model.ts

route function -> controller.ts
Database Query function -> service.ts

*/
