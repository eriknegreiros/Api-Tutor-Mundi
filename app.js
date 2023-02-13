const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
const routes = require('./src/Routes/routes')

const app = express();

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes)


app.listen(8000, () => {
  console.log(`Express está rodando em http://localhost:8000 `);
});
