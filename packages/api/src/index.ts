import express from "express";
import logger from "./config/logger";
import morgan from "./config/morgan";

const PORT = 42069;

const app = express();

app.use(express.json());
app.use(morgan);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This isn't where I parked my car.",
  });
});

app.listen(PORT, () => {
  logger.info("🌍 Listening on port " + PORT);
});
