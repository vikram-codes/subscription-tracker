import express from "express";

import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker");
});

app.listen(PORT, () => {
  console.log(`Subsription Tracker running on http://localhost:${PORT}`);
});

export default app;
