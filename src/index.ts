import express from "express";
import { dbConnect } from "./configs/db.config";
import jsonParserMiddleware from "./middlewares/jsonParser.middleware";
import corsMiddleware from "./middlewares/cors.middleware";

import productRouter from "./routes/product.routes";
import orderRouter from "./routes/order.routes";
import authRouter from "./routes/auth.routes";
import authMiddleware from "./middlewares/auth.middleware";

const app = express();
const PORT = process.env.PORT;

// Connect to database
dbConnect();

// Middleware
app.use(jsonParserMiddleware);
app.use(corsMiddleware);

// Route without auth middleware
app.use(authRouter);

// Auth middleware
app.use(authMiddleware);

// Routes
app.use(productRouter);
app.use(orderRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
