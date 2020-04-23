import express from "express";

import createUser from './services/CreateUser';

import Hello from "./routes";
const app = express();

app.get("/", Hello);

app.listen(4000);
