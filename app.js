const express = require("express");
const app = express();

// our first Route
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/public/views/home-page.html")
);

// ... the previously added code
// Server Started
app.listen(3000, () => console.log("Bienvenidos a una pagina sobre Prince"));

// Make everything inside of public/ available
app.use(express.static("public"));

// ...

app.get("/prince", (request, response, next) =>
  response.sendFile(__dirname + "/views/prince.html")
);

app.get("/foto", (request, response, next) =>
  response.sendFile(__dirname + "/images/foto.html")
);

app.get("/bio", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/foto.html")
);
