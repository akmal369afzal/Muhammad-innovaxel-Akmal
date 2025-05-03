import express from "express";
import { createShortUrl ,updateShortUrl, deleteShortUrl,getOriginalUrl} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", createShortUrl);
router.put("/:id", updateShortUrl);
router.delete("/:id", deleteShortUrl);
router.get("/:shortCode", getOriginalUrl);

export default router;