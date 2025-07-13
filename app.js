import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker");
});

app.listen(3000, () => {
  console.log("Subsription Tracker running on http://localhost:3000");
});

export default app;
