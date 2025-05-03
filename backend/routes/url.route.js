import express from "express";
import { createShortUrl , getAllUrl} from "../controllers/url.controller.js";
const router = express.Router();

router.post("/", createShortUrl);
router.get("/all", getAllUrl);

export default router;