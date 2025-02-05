import express from "express";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weatherRoutes.js";
import cors from "cors";

//
dotenv.config();
const app = express();
app.use(cors());

// The .env file is working and the data is being fetched fine
const port = process.env.PORT || 5100;
app.use(express.json());
app.use(weatherRoutes);

//
app.listen(port, () => {
  console.log(`Server is up at PORT ${port} `);
});
