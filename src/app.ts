import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "ok" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on port ${process.env.SERVER_PORT}`);
});
