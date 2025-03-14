import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// create an express application
const app = express();
const port = 3000;

// parse data from form 
app.use(bodyParser.urlencoded({ extended: true}));

// make an HTTP request to the root of the server
app.get("/", (req, res) => {
  res.sendFile(__dirname  + "/index.html");
}
);

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received");
}
);

// make an HTTP request to the /about route
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1><p>This is the about page.</p>");
}
);

// make an HTTP request to the /contact route
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1><p>This is the contact page.</p>");
}
);

// make an HTTP request to the /register route
app.post("/register", (req, res) => {
  res.sendStatus(201);
}
);

// make an HTTP request to the /login route
app.post("/login", (req, res) => {
  res.sendStatus(200);
}
);

// make an HTTP request to update the /user/:name route
app.put("/user/andrea", (req, res) => {
  res.sendStatus(200);
}
);

// make an HTTP request to update the /user/:name route
app.patch("/user/andrea", (req, res) => {
  res.sendStatus(200);
}
);

// make an HTTP request to delete the /user/:name route
app.delete("/user/andrea", (req, res) => {
  res.sendStatus(204);
}
);  

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
