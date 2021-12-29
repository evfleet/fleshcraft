import express from "express";
import morgan from "morgan";

const PORT = 42069;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("*", (req, res) => {
	res.status(404).json({
		status: 404,
		message: "This isn't where I parked my car.",
	});
});

app.listen(PORT, () => {
	console.info("🌍 Listening on port " + PORT);
});
