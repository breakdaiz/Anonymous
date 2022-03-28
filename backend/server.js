import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import from ""

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/users/profile");

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
);

// So My Name is Bernard, Currently I'm a fullstack deveoper at Unicity Network Philippines.
// On my free time I usually study diffrent technologies / new programming language that can benefit me
// as a developer and also the company I've been working for to improve productivity and sales.

// And also previously I lead a team for developing an app required by the company,

// So with this I think I would be a great fit on the said role with the previous experience I gained on my previous
// Jobs and I know that I will learn a lot from RCG from
