const express = require("express");
const cors = require("cors");

const app = express();

const port = 8000;
app.use(cors());
app.use(express.json());

const route = async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: "hello world" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

app.use("/api", route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
