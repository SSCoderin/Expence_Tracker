const express = require("express");
const app = express();
const auth_router = require("./Router/auth-router");

const port = process.env.PORT || 3000;
require('dotenv').config();

const cors = require("cors");
const connectdb = require("./utils/database");

app.use(cors());
app.use(express.json());
app.use("/api",auth_router)


connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
})