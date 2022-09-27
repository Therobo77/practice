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

//  mera khabar 

// mai agar kho jau to mere hone ki khabar use jarrur de dena !
// wo bechari har din mujhe jina sikhati hai !!

// mai agar thak jau to mere thakne ki khabar use mat dena !
// wo bechari har din mujhe ladna sikhati hai !!

// mai agar so jau to mere rone ki khabar use mat dena !
// wo bechari har din mujhe hasna sikhati hai !!

// mai jab na khau to use , mat batana !
// wo wanaha dur baithkar ,sirf mere lie ruk jati hai !!

// mai agar bate na batau , phone na uthau to use mat batana !
// ki 
// yanaha dur ,tanha baithkar mujhe bhi uski badi yad aati hai !!