const express = require("express");
const cors = require("cors");

const app = express();

const port = 8000;
app.use(cors());
app.use(express.json());

const route = async (req, res, next) => {
  console.log(req.body);
  res.send("hello world");
};

app.use("/api", route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
