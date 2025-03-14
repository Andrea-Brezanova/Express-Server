import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3003;

// parse data from form 
app.use(bodyParser.urlencoded({ extended: true}));



// contninuing with the next step of handling the request
app.get("/", (req, res) => {
  res.sendFile(__dirname  + "/index.html");
}
);

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Data received");
  }
  );

  app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  }
  );