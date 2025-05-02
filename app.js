const express = require('express');
const dotenv=require("dotenv");
const router=require("./src/routes/index.js")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
const port=process.env.PORT
app.use("/api",router)
app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;