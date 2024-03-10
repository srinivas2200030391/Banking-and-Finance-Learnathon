const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/userroutes.jsx");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(cors());
const dburl = "mongodb://0.0.0.0:27017/BankDB";
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/users", userRoutes);

// app.post("/login", async (request, response) => {
//   try {
//     const s = await request.body;
//     console.log(s);
//     const id = parseInt(s["sid"]);
//     const password = s["spassword"];
//     const data = await collection.find({ sid: id }).toArray();
//     const p = bcrypt.compareSync(password, data[0].spassword);
//     if (p) {
//       console.log("Successful");
//     }
//     if (data) {
//       jwt.sign({ id, id: data._id }, secret, {}, (err, token) => {
//         if (err) throw err;
//         response.cookie("token", token).json("ok");
//       });
//     }
//   } catch (error) {
//     response.status(500).send(error.message);
//   }
// });

const PORT = 2014;
app.listen(PORT, () => {
  console.log("Server is running at port: " + PORT);
});
