import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import ProductRoute from "./routes/ProductRoutes.js";
import connectDB from "./config/db.js";
import { createClient } from "redis";
import { notfound, errorHandler } from "./middleware/ErrorHander.js";

dotenv.config();
connectDB();

const app = express();
app.use(morgan("dev"));

const client = createClient({
	password: process.env.REDIS_PASSWORD,
	socket: {
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
	},
});

client.on("error", (err) => {
	console.error("Redis client error:", err);
});

client.on("connect", () => {
	console.log("Connected to Redis");
});

const initializeRedis = async () => {
	try {
		await client.connect();
		console.log("Redis connection established");

		await client.set("test-key", "apple");
		console.log("Set test-key");

		const value = await client.get("test-key");
		console.log("Value of test-key:", value);
	} catch (err) {
		console.error("Error with Redis operations:", err);
	}
};

initializeRedis();

app.get("/", (req, res) => {
	res.send("Hello world from backend");
});

app.use("/api/products", ProductRoute);

app.use(notfound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Backend is running on ${PORT}. Try http://localhost:${PORT}`);
});

export { client };
