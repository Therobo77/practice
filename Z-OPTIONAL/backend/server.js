const PORT = process.env.PORT || 3000;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);

// http://localhost:3000  

// node server.js to start the server!


// command for heroku server
// 1. CLI

// npm install -g heroku
// create .gitignore and add node_modules
// in package.json in scripts "start": "node server.js"
// 