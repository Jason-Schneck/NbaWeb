const express = require("express");
const cors = require("cors")
const app = express ()




// MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({ extended: true }));




require('dotenv').config()
const port = process.env.PORT




// DB Connection
require("./config/config")



// ROUTING
require("./routes/routes")(app)




app.listen(port, () => console.log(`Listening on port ${port} for req and res`));