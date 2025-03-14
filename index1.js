import express from "express";
import morgan from "morgan";

const app = express();
const port = 3001;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
}
);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
}
);