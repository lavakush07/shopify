const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/pay", (req, res) => {
  console.log("pay");
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
