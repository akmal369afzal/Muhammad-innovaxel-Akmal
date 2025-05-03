import express from "express";
import { createShortUrl ,updateShortUrl, deleteShortUrl, getAllUrl} from "../controllers/url.controller.js";
const router = express.Router();

router.post("/", createShortUrl);
router.put("/:id", updateShortUrl);
router.delete("/:id", deleteShortUrl);
router.get("/all", getAllUrl);

export default router;