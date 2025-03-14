import express from "express";
const app = express();
const port = 3002;

function logger(req, res, next) {
  console.log("Request method: " + req.method);
  console.log("Request URL: " + req.url);
  next();
}
 // Custom middleware
app.use(logger);

// continue with the next step of handling the request
app.get("/", (req, res) => {
  res.send("Hello World!");
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

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
}
);