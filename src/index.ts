import express from "express";
import { dbConnect } from "./configs/db.config";
import jsonParserMiddleware from "./middlewares/jsonParser.middleware";
import corsMiddleware from "./middlewares/cors.middleware";

import productRouter from "./routes/product.routes";

const app = express();
const PORT = process.env.PORT;

// Connect to database
dbConnect();

// Middleware
app.use(jsonParserMiddleware);
app.use(corsMiddleware);

// Routes
app.use(productRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
