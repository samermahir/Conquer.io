const path = require("path");
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// test api route for proxy in dev, can delete later
app.get("/api/test", (req, res) => {
  res.send({message: "yo"});
});
// turn on routes
app.use(routes);

// catchall route routes to index.html in dist in production when no api routes are hit
//this points client to the react frontend
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
