import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import urlRoutes from "./routes/url.route.js";
import { getAllUrl } from "./controllers/url.controller.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static("frontend"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.use("/shorten", urlRoutes);
app.get("/short/all", getAllUrl);

app.listen(PORT, async () => {
    await connectDB();
    console.log("Server is running on http://localhost:" + PORT);
});
