const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
// const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const port = 5000;

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("63d50a5b18502f2cfd7f8df6")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://Koushik-Shop:koushik.shop@cluster-shop.yyknzpb.mongodb.net/shop-mongoose?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log("Server started at http://localhost:5000/");
    });
  })
  .catch((err) => {
    console.log(err);
  });
