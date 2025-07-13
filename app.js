import express from "express";

import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import subscriptioRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptioRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker");
});

app.listen(PORT, async () => {
  console.log(`Subsription Tracker running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
