require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const orderRoutes= require("./src/routes/orderRoutes")
app.use(express.json());
app.use(cors());

app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
