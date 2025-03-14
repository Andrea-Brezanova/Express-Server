import express from "express";
const app = express();
const port = 3000;

// make an HTTP request to the root of the server
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
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

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
