import express from "express";
import { createShortUrl ,updateShortUrl, getAllUrl} from "../controllers/url.controller.js";
const router = express.Router();

router.post("/", createShortUrl);
router.put("/:id", updateShortUrl);
router.get("/all", getAllUrl);

export default router;