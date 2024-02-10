import express from "express";
import helmet from "helmet";
import routes from "./routes";
import invalidRequestHandler from "@middlewares/invalidRequestHandler";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(invalidRequestHandler);
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on port ${process.env.SERVER_PORT}`);
});
