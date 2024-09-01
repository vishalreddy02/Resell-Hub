const express = require('express');
const app = express();
app.use(express.json());//to take request body from frontend
require('dotenv').config(); // we need to require the dotenv file to establish the mongodb connection
const dbConfig = require('./config/dbConfig');
const port = process.env.PORT || 5000;

const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute')
const bidsRoute = require('./routes/bidsRoute');
const notificationsRoute = require('./routes/notificationsRoute');

app.use('/api/users', usersRoute); //endpoint middleware.
app.use('/api/products', productsRoute);
app.use('/api/bids', bidsRoute);
app.use('/api/notifications', notificationsRoute);


// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


app.listen(port, ()=> console.log(`Node/Express server started on port ${port}`));