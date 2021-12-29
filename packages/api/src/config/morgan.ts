import morgan, { StreamOptions } from "morgan";
import logger from "./logger";

const stream: StreamOptions = {
  write: (message: string) => logger.info(message.trim()),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const middleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default middleware;