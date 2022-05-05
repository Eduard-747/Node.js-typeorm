const express = require("express");
const typeorm = require("./database/typeorm");
const router = require("./controller/UserControl");

const PORT = 3034;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(PORT,() => console.log(`server has been started on ${PORT}`));